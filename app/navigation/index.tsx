import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";

import StartScreen from "../../app/screens/StartScreen";
import LoginScreen from "../../app/screens/LoginScreen";
import RegisterScreen from "../../app/screens/RegisterScreen";
import CreateUserScreen from "../../app/screens/CreateUserScreen";
import TabsBar from "./tabs";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: false,
          headerStyle: {
            backgroundColor: "#44BECF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="StartScreen"
      >
        <Stack.Screen name="LoadingScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
        <Stack.Screen name="TabsBar" component={TabsBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
