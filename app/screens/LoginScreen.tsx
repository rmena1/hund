import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { loginStyles } from "../styles/loginStyles";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/navigationTypes";
import { FIREBASE_AUTH } from "../../firebaseConfig";

type Navigation = NavigationProp<RootStackParamList, "LoginScreen">;

export const LoginScreen = () => {
  const navigation = useNavigation<Navigation>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  return (
    <>
      <ScrollView style={loginStyles.page}>
        <Image
          source={require("../assets/images/dog_2.png")}
          style={loginStyles.imageLogin}
        />
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
          </View>
          <View style={loginStyles.textboxContainer2}>
            <Text style={loginStyles.label}>Password</Text>
            <TextInput
              style={loginStyles.input}
              value={password}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(newPassword) => setPassword(newPassword)}
            />
          </View>
          <TouchableOpacity
            style={loginStyles.button}
            onPress={() => {
              navigation.navigate("TabsBar");
            }}
            disabled={false}
          >
            <Text style={loginStyles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <Text style={loginStyles.subtitle2}>No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          >
            <Text style={loginStyles.subtitle3}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginScreen;
