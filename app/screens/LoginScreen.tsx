import { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { loginStyles } from '../styles/loginStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

type Navigation = NavigationProp<RootStackParamList, 'LoginScreen'>;

export const LoginScreen = () => {
  const navigation = useNavigation<Navigation>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [securityText, setSecurityText] = useState(true);
  const auth = FIREBASE_AUTH;

  const login = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('MainLayout');
    } catch (error: any) {
      console.log(error);
      alert('Error al iniciar sesión, ' + error.message);
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
      <Image source={require('../assets/images/dog_2.png')} style={loginStyles.imageLogin} />
      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>Hola!</Text>
        <Text style={loginStyles.subtitle}>Aquí puedes iniciar sesión</Text>
        <View style={loginStyles.textboxContainer}>
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            style={loginStyles.input}
            value={email}
            autoCapitalize="none"
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <Ionicons style={loginStyles.iconMail} name="md-mail-outline" size={23} />
        </View>
        <View style={loginStyles.textboxContainer2}>
          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            style={loginStyles.input}
            value={password}
            autoCapitalize="none"
            secureTextEntry={securityText}
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
              login();
            }}
            disabled={false}
          >
            <Text style={loginStyles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        )}
        <View style={loginStyles.containerText}>
          <Text style={loginStyles.subtitle2}>No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}
            style={loginStyles.registerButton}
          >
            <Text style={loginStyles.subtitle3}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
