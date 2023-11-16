import * as Font from "expo-font";
import { initStripe } from '@stripe/stripe-react-native';
import fonts from "./config/fonts";
import { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import Navigation from "./app/navigation/index";
import {
  STRIPE_PUBLISHABLE_KEY
} from "@env";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    initStripe({
      publishableKey: STRIPE_PUBLISHABLE_KEY,
      merchantIdentifier: 'merchant.identifier',
      urlScheme: "your-url-scheme",
    });
  }, []);

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
