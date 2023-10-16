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
          flex: 1,
          flexGrow: 1,
          flexDirection: "column",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Text>DADDADADADA</Text>
      </View>
      <View
        style={{
          flex: 0,
        }}>
        <Image
          source={require("../assets/images/home_dog.png")}
          style={{

            
            
            alignSelf: "center",
            backgroundColor: "pink",
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
