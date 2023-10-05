import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import fonts from "./config/fonts";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import Navigation from "./app/navigation/index";

// screens
import StartScreen from "./app/screens/StartScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import CreateUserScreen from "./app/screens/CreateUserScreen";
import List from "./app/screens/List";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync(fonts);
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return <Navigation />;
}
