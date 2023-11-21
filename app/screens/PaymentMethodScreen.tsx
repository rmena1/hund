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
  const [selectedCard, setSelectedCard] = useState(null);

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

  const deleteCard = async (paymentMethodId) => {
    try {
      const cloudFunctionUrl =
        'https://us-central1-hund-app.cloudfunctions.net/detachPaymentMethod';
      const response = await fetch(cloudFunctionUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethodId,
        }),
      });

      if (response.ok) {
        console.log('Payment method deleted successfully');
        await updatePaymentMethods(); // Update the payment methods after deletion
      } else {
        console.error('Error deleting payment method:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteCard = async (paymentMethodId) => {
    Alert.alert(
      'Eliminar tarjeta',
      '¿Estás seguro de que quieres eliminar esta tarjeta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: async () => {
            await deleteCard(paymentMethodId);
            setSelectedCard(null);
          },
        },
      ],
      { cancelable: false }
    );
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

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

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

        <ScrollView
          bounces={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={paymentMethodStyles.scrollContainer}
        >
          {paymentMethods?.map((method, index) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={index}
              style={
                selectedCard === index ? paymentMethodStyles.selectedCard : paymentMethodStyles.card
              }
              onPress={() => handleCardClick(index)}
            >
              <View style={paymentMethodStyles.selectedCardTopContainer}>
                {method.card?.brand === 'visa' ? (
                  <Image
                    source={require('../assets/images/icons/visa.png')}
                    style={paymentMethodStyles.visa}
                    fadeDuration={0}
                  />
                ) : method.card?.brand === 'mastercard' ? (
                  <Image
                    source={require('../assets/images/icons/mastercard.png')}
                    style={paymentMethodStyles.mastercard}
                    fadeDuration={0}
                  />
                ) : (
                  <Image
                    source={require('../assets/images/icons/credit-card.png')}
                    style={paymentMethodStyles.creditcard}
                    fadeDuration={0}
                  />
                )}
                {selectedCard === index ? (
                  <View>
                    <Text style={paymentMethodStyles.cardTitle}>
                      {method.card?.brand === 'visa'
                        ? 'Visa'
                        : method.card?.brand === 'mastercard'
                        ? 'Mastercard'
                        : 'Tarjeta'}
                    </Text>
                    <Text style={paymentMethodStyles.cardDetails}>
                      {method.card?.exp_month}/{method.card?.exp_year % 100}
                    </Text>
                  </View>
                ) : null}

                <View style={paymentMethodStyles.selectedCardDetails}>
                  <Text style={paymentMethodStyles.cardDetails}>
                    **** **** **** {method.card?.last4}
                  </Text>
                </View>
              </View>
              {selectedCard === index ? (
                <View>
                  <View style={paymentMethodStyles.buttonContainer}>
                    <TouchableOpacity style={paymentMethodStyles.optionsButton}>
                      <Ionicons name="checkmark-circle-outline" size={20} color={Colors.gray1} />
                      <Text style={paymentMethodStyles.cardOption}>Predeterminada</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={paymentMethodStyles.buttonContainer}>
                    <TouchableOpacity
                      style={paymentMethodStyles.optionsButton}
                      onPress={() => handleDeleteCard(method.id)}
                    >
                      <Ionicons name="trash-outline" size={20} color={Colors.gray1} />
                      <Text style={paymentMethodStyles.cardOption}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </TouchableOpacity>
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
