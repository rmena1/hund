import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/generalStyles';

import addCardStyles from '../styles/addCardStyles';

type Navigation = NavigationProp<RootStackParamList, 'AddCardScreen'>;

const AddCardScreen = () => {
  const navigation = useNavigation<Navigation>();

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
            <TextInput placeholder="Nombre en Tarjeta" style={addCardStyles.formInput} />
          </View>

          <View style={addCardStyles.formBox}>
            <Text style={addCardStyles.formText}>Número en tarjeta</Text>
            <View style={addCardStyles.inputContainer}>
              <Ionicons name="ios-card" size={24} style={addCardStyles.icon} />
              <View style={addCardStyles.formInputWithIconContainer}>
                <TextInput style={addCardStyles.formInputWithIcon} />
              </View>
            </View>
          </View>

          <View style={addCardStyles.boxHorizontal}>
            <View style={addCardStyles.formBoxHorizontal}>
              <Text style={addCardStyles.formText}>Fecha de expiración</Text>
              <TextInput style={addCardStyles.formInput} />
            </View>
            <View style={addCardStyles.formBoxHorizontal}>
              <Text style={addCardStyles.formText}>Código de seguridad</Text>
              <TextInput style={addCardStyles.formInput} />
            </View>
          </View>
        </View>

        <View style={addCardStyles.buttonContainer}>
          <TouchableOpacity style={addCardStyles.button} onPress={() => {}} disabled={false}>
            <Text style={addCardStyles.buttonText}>Agregar Tarjeta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddCardScreen;
