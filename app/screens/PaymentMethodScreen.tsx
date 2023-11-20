import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
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

  const initialisePaymentSheet = async () => {
    const UserStripeId = await getUserStripeId();
    const { setupIntent, ephemeralKey, customer } = await fetchPaymentSheetParams(UserStripeId);
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

  async function handleAddCard() {
    console.log('Displaying PaymentSheet...');
    console.log(ready)
    if (!ready) {
      // Reinitialize the payment sheet
      await initialisePaymentSheet();
    }
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log('Error en handleAddCard', error.message);
    } else {
      setReady(false);
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

        <ScrollView contentContainerStyle={paymentMethodStyles.scrollContainer}>
          <Text>Tarjeta 1</Text>
          <Text>Tarjeta 2</Text>
          <Text>Tarjeta 3</Text>
          <Text>Tarjeta 4</Text>
          <Text>Tarjeta 5</Text>
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
