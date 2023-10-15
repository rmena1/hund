import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { loginStyles } from "../styles/loginStyles";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 2,
          flexDirection: "column",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Text>DADDADADADA</Text>
      </View>
      <Image
        source={require("../assets/images/home_dog.png")}
        style={{
          flex: 2,
          resizeMode: "contain",
          alignSelf: "center",
          aspectRatio: 1.1,
          marginBottom: -130,
        }}
      />
    </View>
  );
};

export default HomeScreen;
