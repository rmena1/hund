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
import ProfileScreen from "../screens/ProfileScreen";

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
    <Tab.Navigator>
      <Tab.Screen
        name="list"
        component={List}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
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
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="details"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Ionicons
                  name="clipboard-outline"
                  size={24}
                  color={focused ? Colors.orange : Colors.gray1}
                />
              </View>
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="details2"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
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
          tabBarLabel: "",
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
                  marginTop: 10,
                }}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={focused ? Colors.orange : Colors.gray1}
                />
              </View>
            );
          },
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsBar;
