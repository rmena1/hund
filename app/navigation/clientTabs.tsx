import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../styles/generalStyles';

import Details from '../screens/Details';
import MyWalks from '../screens/MyWalks';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

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
function ClientTabs() {
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
                  alignItems: 'center',
                  justifyContent: 'center',
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
        name="Mis Paseos"
        component={MyWalks}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
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
                  alignItems: 'center',
                  justifyContent: 'center',
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
                  alignItems: 'center',
                  justifyContent: 'center',
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

export default ClientTabs;