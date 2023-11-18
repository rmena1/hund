import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/generalStyles';
import { CardField, useStripe } from '@stripe/stripe-react-native';

import addCardStyles from '../styles/addCardStyles';

type Navigation = NavigationProp<RootStackParamList, 'AddCardScreen'>;

const AddCardScreen = () => {
  const navigation = useNavigation<Navigation>();
  
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const { confirmSetupIntent } = useStripe();

  const handleTextChange = (input) => {
    // Remove any non-numeric characters from the input
    const numericInput = input.replace(/\D/g, '');

    // Use a regular expression to format the numeric input
    const formattedInput = numericInput.replace(/(\d{4})/g, '$1 ');

    setCreditCardNumber(formattedInput);
  };

  const handleCVCChange = (input) => {
    // Remove any non-numeric characters
    const numericInput = input.replace(/\D/g, '');
    setCvc(numericInput);
  };

  

  const handleExpiryDateChange = (text) => {
      // Remove any non-numeric characters
      const numericInput = text.replace(/\D/g, '');
  
      // Format the input as MM/YY
      let formattedInput = numericInput;
  
      if (numericInput.length > 2) {
        formattedInput = `${numericInput.slice(0, 2)}/${numericInput.slice(2)}`;
      }
  
      setExpiryDate(formattedInput);
    };

    const handleAddCard = async () => {
      try {
        // Create a SetupIntent on your server and get the client secret
        const response = await fetch('your-server-endpoint-for-setup-intent');
        const { clientSecret } = await response.json();
  
        // Confirm the SetupIntent with the card details
        const { setupIntent, error } = await confirmSetupIntent(clientSecret, {
          payment_method: {
            card: {
              number: creditCardNumber.replace(/\s/g, ''),
              exp_month: expiryDate.split('/')[0],
              exp_year: expiryDate.split('/')[1],
              cvc: cvc,
              name: cardHolderName,
            },
          }
        });
  
        if (error) {
          console.error('Error confirming SetupIntent:', error.message);
        } else if (setupIntent) {
          console.log('SetupIntent confirmed:', setupIntent);
          // Handle success, e.g., save the SetupIntent ID in your Firestore
        }
      } catch (error) {
        console.error('Error adding card:', error);
      }
    };


  return (
    <View>
      <SafeAreaView style={addCardStyles.AndroidSafeArea}>
        <View style={addCardStyles.header}>
          <TouchableOpacity style={addCardStyles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={40} color={Colors.gray1} />
          </TouchableOpacity>
          <Text style={addCardStyles.headerTitle}> Agregar Tarjeta</Text>
        </View>

        <View style={addCardStyles.formContainer}>
          <View style={addCardStyles.formBox}>
            <Text style={addCardStyles.formText}>Nombre</Text>
            <TextInput value={cardHolderName} onChangeText={(name) => setCardHolderName(name)} placeholder="Nombre en Tarjeta" style={addCardStyles.formInput} />
          </View>

          <View style={addCardStyles.formBox}>
            <Text style={addCardStyles.formText}>Número en tarjeta</Text>
            <View style={addCardStyles.inputContainer}>
              <Ionicons name="ios-card" size={24} style={addCardStyles.icon} />
              <View style={addCardStyles.formInputWithIconContainer}>
                <TextInput
                  value={creditCardNumber}
                  onChangeText={handleTextChange}
                  placeholder='XXXX XXXX XXXX XXXX' 
                  maxLength={19}
                  style={addCardStyles.formInputWithIcon} />
              </View>
            </View>
          </View>

          <View style={addCardStyles.boxHorizontal}>
            <View style={addCardStyles.formBoxHorizontal}>
              <Text style={addCardStyles.formText}>Fecha de expiración</Text>
              <TextInput
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                placeholder="MM/AA"
                maxLength={5}
                keyboardType='number-pad'
                style={addCardStyles.formInput} />
            </View>
            <View style={addCardStyles.formBoxHorizontal}>
              <Text style={addCardStyles.formText}>Código de seguridad</Text>
              <TextInput 
                onChangeText={handleCVCChange}
                placeholder="123"
                maxLength={3}
                keyboardType='number-pad'
                secureTextEntry={true}
                style={addCardStyles.formInput} />
            </View>
          </View>
        </View>

        <View style={addCardStyles.buttonContainer}>
          <TouchableOpacity style={addCardStyles.button} onPress={handleAddCard} disabled={false}>
            <Text style={addCardStyles.buttonText}>Agregar Tarjeta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddCardScreen;
