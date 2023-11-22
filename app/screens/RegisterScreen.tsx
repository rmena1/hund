import { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { loginStyles } from '../styles/loginStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Navigation = NavigationProp<RootStackParamList, 'RegisterScreen'>;

export const RegisterScreen = () => {
  const navigation = useNavigation<Navigation>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [securityText, setSecurityText] = useState(true);
  const auth = FIREBASE_AUTH;

  const register = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Usuario creado correctamente, revisa tu email!');
      navigation.navigate('CreateUserScreen');
    } catch (error: any) {
      console.log(error);
      alert('Error al crear el usuario, ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const changeSecurityText = () => {
    setSecurityText(!securityText);
  };

  return (
    <KeyboardAwareScrollView
      style={loginStyles.mainContainer}
      extraHeight={400}
      extraScrollHeight={Platform.OS === 'android' ? -260 : 20}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <Image source={require('../assets/images/dog_1.png')} style={loginStyles.imageRegister} />
      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>Hola!</Text>
        <Text style={loginStyles.subtitle}>Aquí puedes crear una cuenta</Text>
        <KeyboardAvoidingView behavior="padding">
          <View style={loginStyles.textboxContainer}>
            <Text style={loginStyles.label}>Email</Text>
            <TextInput
              style={loginStyles.input}
              value={email}
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
            />
            <Ionicons style={loginStyles.iconMail} name="md-mail-outline" size={23} />
          </View>
          <View style={loginStyles.textboxContainer2}>
            <Text style={loginStyles.label}>Password</Text>
            <TextInput
              style={loginStyles.input}
              value={password}
              secureTextEntry={securityText}
              autoCapitalize="none"
              onChangeText={(newPassword) => setPassword(newPassword)}
            />
            <FontAwesome style={loginStyles.iconPass} name="lock" size={23} />
            <TouchableOpacity style={loginStyles.iconEye} onPress={() => changeSecurityText()}>
              {securityText ? (
                <Ionicons name="md-eye-off-outline" size={24} color="black" />
              ) : (
                <Ionicons name="md-eye-outline" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <TouchableOpacity
              style={loginStyles.button}
              onPress={() => {
                register();
              }}
              disabled={false}
            >
              <Text style={loginStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
        <View style={loginStyles.containerText}>
          <Text style={loginStyles.subtitle2}>Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            style={loginStyles.registerButton}
          >
            <Text style={loginStyles.subtitle3}>Ingresa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
