import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/generalStyles';

import { paymentMethodStyles } from '../styles/paymentMethodStyles';

type Navigation = NavigationProp<RootStackParamList, 'PaymentMethodScreen'>;

const PaymentMethodScreen = () => {
  const navigation = useNavigation<Navigation>();

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
        onPress={() => navigation.navigate('AddCardScreen')}
      >
        <Ionicons name="add-circle" color={Colors.orange} size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodScreen;
