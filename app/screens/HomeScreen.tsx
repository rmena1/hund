import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { homeStyles } from "../styles/homeStyles";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/navigationTypes";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FIREBASE_AUTH } from "../../firebaseConfig";

type Navigation = NavigationProp<RootStackParamList, "TabsBar">;

export const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const auth = FIREBASE_AUTH;

  return (
    <SafeAreaView style={homeStyles.page}>
      <View style={homeStyles.container}>
        <Text style={homeStyles.title}>
          Bienvenido {auth.currentUser?.email}
        </Text>
        <TouchableOpacity
          style={homeStyles.button}
          onPress={() => navigation.navigate("WalkerDescriptionScreen")}
        >
          <Foundation name="guide-dog" size={40} color="#FF5400FF" />
          {/* <Ionicons name="add" size={25} color="#777B7E" /> */}
        </TouchableOpacity>
        <Image
          source={require("../assets/images/home_dog.png")}
          style={homeStyles.imageHome}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
