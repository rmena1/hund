import { Text, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Colors, Fonts } from "../styles/generalStyles";

import List from "../screens/List";
import Details from "../screens/Details";
import Walks from "../screens/Walks";
import ProfileScreen from "../screens/ProfileScreen";
import CreateWalkScreen from "../screens/CreateWalkScreen";
import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen";

// Thanks for watching
const Tab = createBottomTabNavigator();
// const screenOptions = {
//   tabBarShowLabel: false,
//   headerShown: false,
//   tabBarStyle: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     left: 0,
//     elevation: 0,
//     height: 60,
//     background: "#fff",
//   },
// };
function TabsBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.gray1,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}
              >
                <Ionicons
                  name="home-outline"
                  size={24}
                  color={focused ? Colors.orange : Colors.gray1}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Paseos"
        component={Walks}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}
              >
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color={focused ? Colors.orange : Colors.gray1}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Mensajes"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}
              >
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={24}
                  color={focused ? Colors.orange : Colors.gray1}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Mi perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}
              >
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={focused ? Colors.orange : Colors.gray1}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsBar;
