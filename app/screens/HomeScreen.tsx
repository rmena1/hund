import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { homeStyles } from '../styles/homeStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Foundation } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

type Navigation = NavigationProp<RootStackParamList, 'TabsBar'>;

export const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const auth = FIREBASE_AUTH;
  const [location, setLocation] = useState(null);

  useEffect(() => {

    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status !== "granted") {
          console.log("Location permission denied");
          return;
        }
  
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
  
      } catch (error) {
        console.error("Error requesting location permission:", error);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      console.log("userLocation:", location)
    }
  }, [location]);

  const userLoc = {
    title: "Tu ubicación",
    location: {
      latitude: location?.coords.latitude,
      longitude: location?.coords.longitude,
    },
  };

  const showUserLoc = () => {
    return (
      <Marker 
      coordinate={userLoc.location}
      title={userLoc.title}
      />
    );
  };

  return (
    <SafeAreaView style={homeStyles.page}>
      <View style={homeStyles.container}>
        <Text style={homeStyles.title}>{auth.currentUser?.email}</Text>
        <View style={homeStyles.mapContainer}>
          <MapView
          style={homeStyles.map}
          region={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0121,
          }}
          >
            {showUserLoc()}
          </MapView>
          <TouchableOpacity
          style={homeStyles.button}
          onPress={() => navigation.navigate('CreateWalkScreen')}
        >
          <Foundation name="guide-dog" size={40} color="#FF5400FF" />
          {/* <Ionicons name="add" size={25} color="#777B7E" /> */}
        </TouchableOpacity>
        </View>
        <Image source={require('../assets/images/home_dog.png')} style={homeStyles.imageHome} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
