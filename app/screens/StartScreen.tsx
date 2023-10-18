import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { startStyles } from '../styles/startStyles';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={startStyles.page}>
        <View style={startStyles.titleContainer}>
          <Text style={startStyles.title}>Hola!</Text>
        </View>
        <Image source={require('../assets/images/hund_logo.png')} style={startStyles.image} />
        <Text style={startStyles.subTitle}>Tu otro mejor amigo</Text>
        <View style={startStyles.buttonContainer}>
          <TouchableOpacity
            style={startStyles.button}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            disabled={false}
          >
            <Text style={startStyles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={startStyles.buttonCreate}
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}
            disabled={false}
          >
            <Text style={startStyles.buttonTextCreate}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default StartScreen;
