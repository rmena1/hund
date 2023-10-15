import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import StartScreen from "../../app/screens/StartScreen";
import LoginScreen from "../../app/screens/LoginScreen";
import RegisterScreen from "../../app/screens/RegisterScreen";
import CreateUserScreen from "../../app/screens/CreateUserScreen";
import ProfilePreviewScreen from "../../app/screens/ProfilePreviewScreen";
import CreateMyDogsScreen from "../../app/screens/CreateMyDogsScreen";
import TabsBar from "./tabs";

import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

export type RootStackParams = {
  CreateUserScreen: {
    email: string
  };
  ProfilePreviewScreen: { 
    userName: string, 
    phone: string, 
    email: string ,
    birthday: string
  };
};

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
          </>
        ) : (
          <>
            <Stack.Screen name="LoadingScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
            <Stack.Screen name="ProfilePreviewScreen" component={ProfilePreviewScreen} />
            <Stack.Screen name="CreateMyDogsScreen" component={CreateMyDogsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
