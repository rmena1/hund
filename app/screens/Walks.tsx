import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { FIREBASE_DB, FIREBASE_AUTH } from '../../firebaseConfig';
import { collection, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import walksStyles from '../styles/walksStyles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Define the type for your routes
type BottomTabParamList = {
  Home: undefined;
  Paseos: undefined;
  Mensajes: undefined;
  MiPerfil: undefined;
};

// Specify the type for the navigation prop
type SomeScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Home'>;

type Props = {
  navigation: SomeScreenNavigationProp;
};

const Walks: React.FC<Props> = ({ navigation }) => {
  const [walks, setWalks] = useState<any>([]);
  const [dogs, setDogs] = useState<any>([]);
  const [currentWalk, setCurrentWalk] = useState<any>(null);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const walksRef = collection(FIREBASE_DB, 'paseos');
    const dogsRef = collection(FIREBASE_DB, 'dogData');

    const walkSubscriber = onSnapshot(walksRef, {
      next: (snapshot) => {
        const walks: any[] = [];
        snapshot.docs.forEach((doc) => {
          walks.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setWalks(walks);
      },
    });

    const dogSubscriber = onSnapshot(dogsRef, {
      next: (snapshot) => {
        const updatedDogs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDogs(updatedDogs);
      },
    });

    let userDataSubscriber = () => {};
    if (auth.currentUser?.uid) {
      userDataSubscriber = onSnapshot(
        doc(FIREBASE_DB, 'walkerData', auth.currentUser?.uid),
        (doc) => {
          if (doc.data()) {
            const data = doc.data();
            const newCurrentWalk = data?.currentWalk;
            setCurrentWalk(newCurrentWalk);
          }
        }
      );
    }

    return () => {
      walkSubscriber();
      dogSubscriber();
      userDataSubscriber();
    };
  }, []);

  const handleCardPress = (walk) => {
    // if user already has a walk, don't let them accept another one
    if (currentWalk) {
      Alert.alert(
        'Ya tienes un paseo!',
        'No puedes aceptar otro paseo hasta que termines el que tienes actualmente.',
        [
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
            style: 'cancel',
          },
        ]
      );
    } else {
      Alert.alert(
        'Aceptar paseo',
        'Quieres aceptar este paseo? Una vez aceptado te comprometes a completarlo.',
        [
          {
            text: 'Rechazar',
            onPress: () => console.log('Decline Pressed'),
            style: 'cancel',
          },
          { text: 'Aceptar', onPress: () => handleAcceptWalk(walk) },
        ]
      );
    }
  };

  const handleAcceptWalk = async (walk) => {
    // Add walk id to user's accepted walks
    if (auth.currentUser?.uid) {
      await updateDoc(doc(FIREBASE_DB, 'walkerData', auth.currentUser?.uid), {
        currentWalk: walk.id,
      });
      await updateDoc(doc(FIREBASE_DB, 'userData', walk.id_usuario), {
        currentWalk: walk.id,
      });
      await updateDoc(doc(FIREBASE_DB, 'paseos', walk.id), {
        taken: true,
        state: 'goingToPickUpDog',
        id_paseador: auth.currentUser?.uid,
      });
      navigation.navigate('Home');
    }
  };

  return (
    <View style={walksStyles.page}>
      <ScrollView>
        <View style={walksStyles.contentContainer}>
          {walks.map((walk: any, index: number) => {
            const walkDate = walk.fecha.toDate();
            const date = walkDate.toLocaleDateString();
            const time = walkDate.toLocaleTimeString();
            if (walk.email_usuario && walk.id_usuario && !walk.taken) {
              return (
                <TouchableOpacity
                  key={index}
                  style={walksStyles.walkItem}
                  onPress={() => handleCardPress(walk)}
                >
                  <Text style={walksStyles.infoContainer}>
                    <Text style={walksStyles.walkTitles}>Email:</Text>
                    <Text> {walk.email_usuario}</Text>
                  </Text>
                  <Text style={walksStyles.infoContainer}>
                    <Text style={walksStyles.walkTitles}>Nombre perro:</Text>
                    <Text style={walksStyles.walkInfo}>
                      {' '}
                      {dogs[walk.perro] ? dogs[walk.perro].name : 'Sin nombre'}
                    </Text>
                  </Text>
                  <Text style={walksStyles.infoContainer}>
                    <Text style={walksStyles.walkTitles}>Fecha:</Text>
                    <Text> {date}</Text>
                  </Text>
                  <Text style={walksStyles.infoContainer}>
                    <Text style={walksStyles.walkTitles}>Hora de pedido:</Text>
                    <Text> {time}</Text>
                  </Text>
                  <Text style={walksStyles.infoContainer}>
                    <Text style={walksStyles.walkTitles}>Tipo:</Text>
                    <Text> {walk.inmediato ? 'Inmediato' : 'Programado'}</Text>
                  </Text>
                  <View style={walksStyles.viewMoreContainer}>
                    <View style={walksStyles.viewMoreBox}>
                      <View style={walksStyles.arrow}></View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
      <Image source={require('../assets/images/home_dog.png')} style={walksStyles.imageWalks} />
    </View>
  );
};

export default Walks;
