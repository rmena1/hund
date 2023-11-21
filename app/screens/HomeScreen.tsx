import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { homeStyles } from '../styles/homeStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { Foundation } from '@expo/vector-icons';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaseConfig';
import { walkerHomeScreenStyles } from '../styles/walkerHomeScreenStyles';
import React, { useEffect, useState } from 'react';
import { onSnapshot, updateDoc, doc } from 'firebase/firestore';

type Navigation = NavigationProp<RootStackParamList, 'TabsBar'>;

export const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const auth = FIREBASE_AUTH;
  const [currentWalkId, setCurrentWalkId] = useState<any>(null);
  const [currentWalk, setCurrentWalk] = useState<any>(null);
  const [currentInstruction, setCurrentInstruction] = useState<any>('');

  useEffect(() => {
    let userDataSubscriber = () => {};
    if (auth.currentUser?.uid) {
      userDataSubscriber = onSnapshot(
        doc(FIREBASE_DB, 'userData', auth.currentUser?.uid),
        (doc) => {
          if (doc.data()) {
            const data = doc.data();
            const newCurrentWalk = data?.currentWalk;
            setCurrentWalkId(newCurrentWalk);
          }
        }
      );
    }
    return () => {
      userDataSubscriber();
    };
  }, []);

  useEffect(() => {
    let walksSubscriber = () => {};
    if (currentWalkId) {
      walksSubscriber = onSnapshot(doc(FIREBASE_DB, 'paseos', currentWalkId), (doc) => {
        if (doc.data()) {
          setCurrentWalk(doc.data());
          if (doc.data()?.state === 'goingToPickUpDog') {
            setCurrentInstruction(
              'Tu paseo ha sido aceptado! El paseador se está dirigiendo a tu ubicación para recoger a tu mascota. Por favor, espera a que llegue.'
            );
          }
        }
      });
    }
    return () => {
      walksSubscriber();
    };
  }, [currentWalkId]);

  useEffect(() => {
    if (currentWalk?.state === 'walkingTheDog') {
      setCurrentInstruction(
        'Tu mascota está siendo paseada! Por favor, espera a que el paseo termine.'
      );
    } else if (currentWalk?.state === 'waitingForDog') {
      setCurrentInstruction(
        'El paseador ya llegó a tu ubicación! Por favor, entrega a tu mascota para que pueda ser paseada.'
      );
    } else if (currentWalk?.state === 'goingToPickUpDog') {
      setCurrentInstruction(
        'Tu paseo ha sido aceptado! El paseador se está dirigiendo a tu ubicación para recoger a tu mascota. Por favor, espera a que llegue.'
      );
    } else if (currentWalk?.state === 'returningToDogPickUpPoint') {
      setCurrentInstruction(
        'El paseo ha terminado! El paseador está regresando a la ubicación donde recogió a tu mascota.'
      );
    } else if (currentWalk?.state === 'waitingToDeliverDog') {
      setCurrentInstruction(
        'El paseador llegó con tu perro! Por favor, recíbelo y verifica que todo esté en orden. No olvides agradecer al paseador por su servicio!'
      );
    } else if (currentWalk?.state === 'finished') {
      setCurrentInstruction(
        'El paseo ha terminado! Esperamos que hayas disfrutado el servicio. No olvides calificar al paseador.'
      );
    }
  }, [currentWalk?.state]);

  if (currentWalk && currentWalkId) {
    return (
      <View style={walkerHomeScreenStyles.container}>
        <Text style={walkerHomeScreenStyles.title}>Paseo en progreso!</Text>
        <Text style={walkerHomeScreenStyles.instruction}>{currentInstruction}</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={homeStyles.page}>
        <View style={homeStyles.container}>
          <Text style={homeStyles.title}>Bienvenido {auth.currentUser?.email}</Text>
          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => navigation.navigate('CreateWalkScreen')}
          >
            <Foundation name="guide-dog" size={40} color="#FF5400FF" />
            {/* <Ionicons name="add" size={25} color="#777B7E" /> */}
          </TouchableOpacity>
          <Image source={require('../assets/images/home_dog.png')} style={homeStyles.imageHome} />
        </View>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
