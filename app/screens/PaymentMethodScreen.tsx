import { Image, View, Text, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { usePaymentSheet } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/generalStyles';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { FIREBASE_DB } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

import { paymentMethodStyles } from '../styles/paymentMethodStyles';

type Navigation = NavigationProp<RootStackParamList, 'PaymentMethodScreen'>;

const PaymentMethodScreen = () => {
  const navigation = useNavigation<Navigation>();
  const auth = FIREBASE_AUTH;
  const [ready, setReady] = useState(false);
  const [userStripeId, setUserStripeID] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([]);

  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  const getUserStripeId = async () => {
    try {
      if (auth.currentUser?.uid) {
        const userDocRef = doc(FIREBASE_DB, 'userData', auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          return userData.stripeId;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updatePaymentMethods = async () => {
    try {
      const updatedPaymentMethods = await fetchCustomerPaymentMethods(userStripeId);
      setPaymentMethods(updatedPaymentMethods);
    } catch (error) {
      console.error('Error updating payment methods:', error);
    }
  };

  const initialisePaymentSheet = async () => {
    const StripeId = await getUserStripeId();
    setUserStripeID(StripeId);
    const { setupIntent, ephemeralKey, customer } = await fetchPaymentSheetParams(StripeId);
    // Fetch the customer's payment methods
    const customerPaymentMethods = await fetchCustomerPaymentMethods(StripeId);

    // Update the payment methods state
    setPaymentMethods(customerPaymentMethods);

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey.secret,
      setupIntentClientSecret: setupIntent.client_secret,
      merchantDisplayName: 'Example Inc.',
      allowsDelayedPaymentMethods: true,
      returnURL: 'stripe-example://stripe-redirect',
    });
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setReady(true);
    }
  };

  useEffect(() => {
    initialisePaymentSheet();
  }, []);

  const fetchPaymentSheetParams = async (stripeCustomerId) => {
    const response = await fetch(
      'https://us-central1-hund-app.cloudfunctions.net/paymentSheetSetupIntent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: stripeCustomerId,
        }),
      }
    );

    const { setupIntent, ephemeralKey, customer } = await response.json();

    return {
      setupIntent,
      ephemeralKey,
      customer,
    };
  };

  const fetchCustomerPaymentMethods = async (stripeCustomerId) => {
    const response = await fetch(
      `https://us-central1-hund-app.cloudfunctions.net/listStripePaymentMethods`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: stripeCustomerId,
        }),
      }
    );
    const { paymentMethods } = await response.json();
    console.log(paymentMethods);
    return paymentMethods;
  };

  async function handleAddCard() {
    console.log('Displaying PaymentSheet...');
    if (!ready) {
      // Reinitialize the payment sheet
      await initialisePaymentSheet();
    }
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log('Error en handleAddCard', error.message);
    } else {
      setReady(false);
      await updatePaymentMethods();
    }
  }

  return (
    <View>
      <SafeAreaView style={paymentMethodStyles.AndroidSafeArea}>
        <View style={paymentMethodStyles.header}>
          <TouchableOpacity
            style={paymentMethodStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="close-outline" size={40} color={Colors.gray1} />
          </TouchableOpacity>
          <Text style={paymentMethodStyles.headerTitle}> Mis métodos de pago</Text>
        </View>

        <ScrollView bounces={true} showsVerticalScrollIndicator={false} contentContainerStyle={paymentMethodStyles.scrollContainer}>
          {paymentMethods?.map((method, index) => (
            <View key={index} style={paymentMethodStyles.card}>
              {method.card?.brand === 'visa' ? (
                <Image
                  source={require('../assets/images/icons/visa.png')}
                  style={paymentMethodStyles.visa}
                />
              ) : method.card?.brand === 'mastercard' ? (
                <Image
                  source={require('../assets/images/icons/mastercard.png')}
                  style={paymentMethodStyles.visa}
                />
              ) : (
                <Image
                  source={require('../assets/images/icons/credit-card.png')}
                  style={paymentMethodStyles.visa}
                />
              )}
              <Text style={paymentMethodStyles.cardDetails}>
                **** **** **** {method.card?.last4}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity
        style={paymentMethodStyles.addButton}
        onPress={handleAddCard}
        disabled={loading}
      >
        <Ionicons name="add-circle" color={Colors.orange} size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodScreen;
