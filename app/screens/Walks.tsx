import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { FIREBASE_DB } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import walksStyles from '../styles/walksStyles';

const Walks = () => {
  const [walks, setWalks] = useState<any>([]);
  const [dogs, setDogs] = useState<any>([]);

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

    return () => {
      walkSubscriber();
      dogSubscriber();
    };
  }, []);

  return (
    <View style={walksStyles.page}>
      <ScrollView>
        <View style={walksStyles.contentContainer}>
          {walks.map((walk: any, index: number) => {
            const walkDate = walk.fecha.toDate();
            const date = walkDate.toLocaleDateString();
            const time = walkDate.toLocaleTimeString();
            if (walk.email_usuario) {
              return (
                <View key={index} style={walksStyles.walkItem}>
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
                </View>
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
