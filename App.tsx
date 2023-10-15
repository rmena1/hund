import * as Font from "expo-font";
import fonts from "./config/fonts";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import Navigation from "./app/navigation/index";

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
