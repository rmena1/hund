import React, { useEffect, useState } from 'react';
import { View, ScrollView, Platform, Alert, Image, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const onDateChange = (event: any, newDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (newDate) {
      setSelectedDate(newDate); // Actualiza la fecha seleccionada
    } else {
      // Manejar el caso de cancelación del selector de fecha
      setShowDatePicker(false);
    }
  };

  const filterAndSortWalks = (): any[] => {
    let currentAndFutureWalks = walks.filter((walk) => isTodayOrFuture(walk.fecha.toDate()));

    if (selectedDate) {
      currentAndFutureWalks = currentAndFutureWalks.filter((walk) => {
        const walkDate = walk.fecha.toDate();
        return walkDate.setHours(0, 0, 0, 0) === selectedDate.setHours(0, 0, 0, 0);
      });
    }

    return currentAndFutureWalks.sort(sortWalks);
  };

  // Función para verificar si la fecha del paseo es hoy o en el futuro
  const isTodayOrFuture = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Establece la hora al inicio del día
    return date >= today; // Paseos de hoy o en el futuro
    // return date <= today; // Cambia esto para probar el orden y color de prioridad segun dentro de los 30 minutos o paseos inmediatos (Paseos de hoy o en el pasado)
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker); // Cambia el estado para mostrar/ocultar el selector
  };

  // Función para verificar si un paseo es inmediato o dentro de los próximos 30 minutos
  const isImmediateOrWithin30Min = (walk: any): boolean => {
    if (walk.inmediato) return true;

    const currentTime = new Date();
    const thirtyMinutesLater = new Date(currentTime.getTime() + 30 * 60000);
    const walkDate = walk.fecha.toDate();

    return walkDate >= currentTime && walkDate <= thirtyMinutesLater;
  };

  const clearDateFilter = () => {
    setSelectedDate(null); // Esto reseteará el filtro de fecha
  };

  // Función para comparar dos paseos y decidir su orden
  const sortWalks = (a: any, b: any): number => {
    const aIsImmediate = isImmediateOrWithin30Min(a);
    const bIsImmediate = isImmediateOrWithin30Min(b);

    if (aIsImmediate && !bIsImmediate) return -1;
    if (!aIsImmediate && bIsImmediate) return 1;

    // Compara las fechas si ninguno de los dos es inmediato
    return a.fecha.toDate().getTime() - b.fecha.toDate().getTime();
  };
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
      });
      navigation.navigate('Home');
    }
  };

  return (
    <View style={walksStyles.page}>
      <View style={walksStyles.buttonContainer}>
        <TouchableOpacity
          onPress={toggleDatePicker} // Usa la función toggleDatePicker
          style={[walksStyles.buttonDate, walksStyles.buttonSelect]}
        >
          <Text style={walksStyles.buttonText}>Seleccionar Fecha</Text>
        </TouchableOpacity>
        {selectedDate && (
          <TouchableOpacity
            onPress={clearDateFilter}
            style={[walksStyles.buttonDate, walksStyles.buttonClear]}
          >
            <Text style={walksStyles.buttonText}>Limpiar Filtro de Fecha</Text>
          </TouchableOpacity>
        )}
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
          maximumDate={new Date(2300, 12, 31)}
          minimumDate={new Date(1950, 1, 1)}
        />
      )}
      <ScrollView>
        <View style={walksStyles.contentContainer}>
          {filterAndSortWalks().map((walk: any, index: number) => {
            const walkDate = walk.fecha.toDate();
            const date = walkDate.toLocaleDateString();
            const time = walkDate.toLocaleTimeString();
            if (walk.email_usuario && walk.id_usuario && !walk.taken) {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    walksStyles.walkItem,
                    isImmediateOrWithin30Min(walk) ? walksStyles.immediateWalk : {},
                  ]}
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
