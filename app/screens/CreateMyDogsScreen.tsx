import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import createMyDogsStyles from '../styles/createMyDogsStyles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/generalStyles';

import { FIREBASE_AUTH } from '../../firebaseConfig';
import { FIREBASE_DB } from '../../firebaseConfig';
import { doc, onSnapshot, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';

const CreateMyDogsScreen = () => {
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  const [dogsID, setDogsID] = useState([]);
  const [dogs, setDogs] = useState([]);

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpansion = (title) => {
    if (expandedItem === title) {
      setExpandedItem(null);
    } else {
      setExpandedItem(title);
    }
  };

  const deleteDog = async (dogId) => {
    try {
      await deleteDoc(doc(FIREBASE_DB, 'dogData', dogId));
      console.log('Dog deleted');

      if (auth.currentUser?.uid) {
        const userDocRef = doc(FIREBASE_DB, 'userData', auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();

          const updatedDogs = userData.dogs.filter((dog) => dog !== dogId);

          await updateDoc(userDocRef, {
            dogs: updatedDogs,
          });
        }
      }
    } catch (error) {
      console.error('Error al eliminar el perro:', error);
    }
  };

  const editDog = (id, dog) => {
    navigation.navigate('MyDogEditScreen', { isNew: false, dogID: id, dog: dog });
  };

  const addNewDog = () => {
    navigation.navigate('MyDogEditScreen', {
      isNew: true,
      dogID: '',
      dog: {
        name: '',
        age: '',
        breed: '',
        description: '',
        reactivity: '',
        photoUrl: null,
      },
    });
  };

  const getDogs = async () => {
    for (let i = 0; i < dogsID.length; i++) {
      const dogId = dogsID[i];
      const dogDocRef = doc(FIREBASE_DB, 'dogData', dogId);
      const dogDoc = await getDoc(dogDocRef);
      if (dogDoc.exists()) {
        const dogData = dogDoc.data();
        const newDog = {
          name: dogData.name,
          age: dogData.age,
          breed: dogData.breed,
          description: dogData.description,
          reactivity: dogData.reactivity,
          photoUrl: dogData.photoUrl,
        };
        setDogs([...dogs, newDog]);
      }
    }
  };

  useEffect(() => {
    if (auth.currentUser?.uid) {
      const unsub = onSnapshot(doc(FIREBASE_DB, 'userData', auth.currentUser.uid), (doc) => {
        if (doc.data()) {
          const data = doc.data();
          const newUserData = {
            dogs: data?.dogs,
          };
          setDogsID(newUserData.dogs);
        }
      });

      return () => {
        unsub();
      };
    }
  }, []);

  useEffect(() => {
    if (dogsID.length > 0) {
      getDogs();
    }
  }, [dogsID]);

  return (
    <View>
      <SafeAreaView style={createMyDogsStyles.AndroidSafeArea}>
        <View style={createMyDogsStyles.header}>
          <TouchableOpacity
            style={createMyDogsStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="close-outline" size={40} color={Colors.gray1} />
          </TouchableOpacity>
          <Text style={createMyDogsStyles.headerTitle}> Mis Perros</Text>
        </View>

        <ScrollView style={createMyDogsStyles.table}>
          {dogsID.length > 0 ? (
            dogs.map((dog, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => toggleExpansion(dog.name)}>
                  <View style={createMyDogsStyles.header}>
                    <Image
                      source={
                        dog.photoUrl
                          ? { uri: dog.photoUrl }
                          : require('../assets/images/avatar_dog.png')
                      }
                      style={createMyDogsStyles.image}
                    />
                    <View style={createMyDogsStyles.container}>
                      <Text style={createMyDogsStyles.headerText}>{dog.name}</Text>
                      <Text style={createMyDogsStyles.breedText}>{dog.breed}</Text>
                    </View>
                    <Text style={createMyDogsStyles.icon}>
                      {expandedItem === dog.name ? '-' : '+'}
                    </Text>
                  </View>
                </TouchableOpacity>
                {expandedItem === dog.name && (
                  <View style={createMyDogsStyles.content}>
                    <View style={createMyDogsStyles.container2}>
                      <Text style={createMyDogsStyles.titleContent}>Edad</Text>
                      <Text style={createMyDogsStyles.textContent}>{dog.age}</Text>
                    </View>
                    <View style={createMyDogsStyles.container2}>
                      <Text style={createMyDogsStyles.titleContent}>Descripción</Text>
                      <Text style={createMyDogsStyles.textContent}>{dog.description}</Text>
                    </View>
                    <View style={createMyDogsStyles.container2}>
                      <Text style={createMyDogsStyles.titleContent}>Reactividad</Text>
                      <Text style={createMyDogsStyles.textContent}>{dog.reactivity}</Text>
                    </View>
                    <View style={createMyDogsStyles.buttonContainer}>
                      <View style={createMyDogsStyles.buttonDelete}>
                        <TouchableOpacity
                          onPress={() => {
                            deleteDog(dogsID[index]);
                          }}
                        >
                          <Text style={createMyDogsStyles.buttonDeleteText}>Eliminar</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={createMyDogsStyles.buttonEdit}>
                        <TouchableOpacity
                          onPress={() => {
                            editDog(dogsID[index], dog);
                          }}
                        >
                          <Text style={createMyDogsStyles.buttonEditText}>Editar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            ))
          ) : (
            <View>
              <Text style={createMyDogsStyles.textNoDogs}>No tienes perros :(</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
      <TouchableOpacity style={createMyDogsStyles.addButton} onPress={() => addNewDog()}>
        <Ionicons name="add-circle" color={Colors.orange} size={50} />
      </TouchableOpacity>
    </View>
  );
};

export default CreateMyDogsScreen;
