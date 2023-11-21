import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaseConfig';
import { onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { walkerHomeScreenStyles } from '../styles/walkerHomeScreenStyles';

const WalkerHome = () => {
  const auth = FIREBASE_AUTH;
  const [currentWalkId, setCurrentWalkId] = useState<any>(null);
  const [currentWalk, setCurrentWalk] = useState<any>(null);
  const [currentInstruction, setCurrentInstruction] = useState<any>('');
  const [currentButtonText, setCurrentButtonText] = useState<any>('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let userDataSubscriber = () => {};
    if (auth.currentUser?.uid) {
      userDataSubscriber = onSnapshot(
        doc(FIREBASE_DB, 'walkerData', auth.currentUser?.uid),
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
              'El dueño de la mascota te está esperando! Dirígete a su ubicación para recoger a su mascota en la dirección: ...'
            );
            setCurrentButtonText('Ya llegué al punto de encuentro');
          }
        }
      });
    }
    return () => {
      walksSubscriber();
    };
  }, [currentWalkId]);

  const nextStep = () => {
    if (currentWalk.state === 'goingToPickUpDog') {
      updateDoc(doc(FIREBASE_DB, 'paseos', currentWalkId), {
        state: 'waitingForDog',
      });
      setCurrentInstruction(
        'Ya llegaste a la ubicación del dueño de la mascota! Espera a que te entregue a su perro.'
      );
      setCurrentButtonText('Ya tengo al perro');
    } else if (currentWalk.state === 'waitingForDog') {
      updateDoc(doc(FIREBASE_DB, 'paseos', currentWalkId), {
        state: 'walkingTheDog',
      });
      setCurrentInstruction(
        'Todo listo! Ahora puedes pasear al perro. Se amable, paciente y disfruta el paseo! Recuerda que el perro es tu mayor responsabilidad en este momento. El paseo debe durar 30 minutos. Suerte!'
      );
      setCurrentButtonText('Ya terminé el paseo');
    } else if (currentWalk.state === 'walkingTheDog') {
      updateDoc(doc(FIREBASE_DB, 'paseos', currentWalkId), {
        state: 'returningToDogPickUpPoint',
      });
      setCurrentInstruction(
        'El paseo ha terminado! Ahora debes regresar al punto de encuentro con el dueño de la mascota.'
      );
      setCurrentButtonText('Ya llegué al punto de encuentro');
    } else if (currentWalk.state === 'returningToDogPickUpPoint') {
      updateDoc(doc(FIREBASE_DB, 'paseos', currentWalkId), {
        state: 'waitingToDeliverDog',
      });
      setCurrentInstruction(
        'Ya llegaste al punto de encuentro! Espera a que el dueño de la mascota llegue para entregarle a su perro.'
      );
      setCurrentButtonText('Ya entregué el perro');
    } else if (currentWalk.state === 'waitingToDeliverDog') {
      updateDoc(doc(FIREBASE_DB, 'paseos', currentWalkId), {
        state: 'finished',
      });
      setCurrentInstruction('El paseo ha terminado! Califica el paseo!');
      setCurrentButtonText('Calificar paseo');
    } else {
      if (auth.currentUser?.uid) {
        updateDoc(doc(FIREBASE_DB, 'walkerData', auth.currentUser?.uid), {
          currentWalk: null,
        });
      }
      updateDoc(doc(FIREBASE_DB, 'userData', currentWalk.id_usuario), {
        currentWalk: null,
      });
      console.log('Paseo terminado! Calificación: ', rating);
      setCurrentWalkId(null);
      setCurrentWalk(null);
    }
  };

  const renderStarRating = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Text
            style={
              i <= rating ? walkerHomeScreenStyles.activeStar : walkerHomeScreenStyles.inactiveStar
            }
          >
            ★
          </Text>
        </TouchableOpacity>
      );
    }
    return <View style={walkerHomeScreenStyles.starsContainer}>{stars}</View>;
  };

  if (currentWalk) {
    if (currentWalk.state === 'finished') {
      return (
        <View style={walkerHomeScreenStyles.container}>
          <Text style={walkerHomeScreenStyles.title}>Califica el paseo</Text>
          {renderStarRating()}
          <TouchableOpacity style={walkerHomeScreenStyles.button} onPress={() => nextStep()}>
            <Text style={walkerHomeScreenStyles.buttonText}>{currentButtonText}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={walkerHomeScreenStyles.container}>
          <Text style={walkerHomeScreenStyles.title}>Paseo en progreso!</Text>
          <Text style={walkerHomeScreenStyles.instruction}>{currentInstruction}</Text>
          <TouchableOpacity style={walkerHomeScreenStyles.button} onPress={() => nextStep()}>
            <Text style={walkerHomeScreenStyles.buttonText}>{currentButtonText}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  } else {
    return (
      <View style={walkerHomeScreenStyles.container}>
        <Text style={walkerHomeScreenStyles.text}>
          No hay ningún paseo activo! Selecciona uno en la sección de paseos
        </Text>
      </View>
    );
  }
};

export default WalkerHome;
