import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import StartScreen from "./app/screens/StartScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import CreateUserScreen from "./app/screens/CreateUserScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="StartScreen" 
          component={StartScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen}  
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="CreateUserScreen" 
          component={CreateUserScreen}  
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
