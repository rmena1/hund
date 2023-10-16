import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import StartScreen from "../../app/screens/StartScreen";
import CreateWalkScreen from "../screens/CreateWalkScreen";
import LoginScreen from "../../app/screens/LoginScreen";
import RegisterScreen from "../../app/screens/RegisterScreen";
import CreateUserScreen from "../../app/screens/CreateUserScreen";
import TabsBar from "./tabs";

import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

function MainLayout() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="TabsBar"
        component={TabsBar}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

const Navigation = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("User", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

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
        {user ? (
          <>
            <Stack.Screen name="MainLayout" component={MainLayout} />
            <Stack.Screen
              name="CreateUserScreen"
              component={CreateUserScreen}
            />
            <Stack.Screen
              name="CreateWalkScreen"
              component={CreateWalkScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="LoadingScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
