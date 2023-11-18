import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { usePaymentSheet} from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/generalStyles';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_DB } from '../../firebaseConfig';
import { doc, onSnapshot, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';




import { paymentMethodStyles } from '../styles/paymentMethodStyles';

type Navigation = NavigationProp<RootStackParamList, 'PaymentMethodScreen'>;

const PaymentMethodScreen = () => {
  const navigation = useNavigation<Navigation>();
  const auth = FIREBASE_AUTH;

  const getUserStripeId = async () => {
    try {
      if (auth.currentUser?.uid) {
        const userDocRef = doc(FIREBASE_DB, 'userData', auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
    
        if (userDoc.exists()) {
          const userData = userDoc.data();
          return userData.stripeId
        }
      }
    } catch (error) {
      console.error(error);
    }
  };



  const [ready, setReady] = useState(false);
  const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet();

  useEffect(() => {
    initialisePaymentSheet();
  }, []);

  const initialisePaymentSheet = async () => {
    const {setupIntent, ephemeralKey, customer} =
      await fetchPaymentSheetParams();
    console.log(setupIntent);
    const {error} = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      setupIntentClientSecret: setupIntent,
      merchantDisplayName: 'Example Inc.',
      /* applePay: {
        merchantCountryCode: 'US',
      },
      googlePay: {
        merchantCountryCode: 'US',
        testEnv: true,
        currencyCode: 'usd',
      }, */
      allowsDelayedPaymentMethods: true,
      returnURL: 'stripe-example://stripe-redirect',
    });
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setReady(true);
    }
  };

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet-setup-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {setupIntent, ephemeralKey, customer} = await response.json();

    return {
      setupIntent,
      ephemeralKey,
      customer,
    };
  };



  async function handleAddCard() {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'The payment method was setup successfully');
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
      >
        <Ionicons name="add-circle" color={Colors.orange} size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodScreen;
