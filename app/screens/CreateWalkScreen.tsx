// Vista de formulario para crear un paseo

import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { createWalkStyles } from '../styles/createWalkStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { addDoc, collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseConfig';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
interface Dog {
  id: number;
  value: string;
}
type Navigation = NavigationProp<RootStackParamList, 'TabsBar'>;

export const CreateWalkScreen: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const auth = FIREBASE_AUTH;
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState<Date>(new Date());
  const [walkTime, setWalkTime] = useState(0);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isImmediate, setIsImmediate] = useState(false);
  const [selectedDog, setSelectedDog] = useState<number | null>(null);
  const [additionalComments, setAdditionalComments] = useState<string>('');
  const [dogsID, setDogsID] = useState([]);
  const [dogs, setDogs] = useState([]);

  const createWalk = async () => {
    const docRef = await addDoc(collection(FIREBASE_DB, 'paseos'), {
      id_usuario: auth.currentUser?.uid,
      perro: selectedDog,
      fecha: date,
      inmediato: isImmediate,
      comentarios: additionalComments,
    });
    console.log('Document written with ID: ', docRef.id);
  };

  const getDogs = async () => {
    const newDogs = [];
    for (let i = 0; i < dogsID.length; i++) {
      const dogId = dogsID[i];
      const dogDocRef = doc(FIREBASE_DB, 'dogData', dogId);
      const dogDoc = await getDoc(dogDocRef);
      if (dogDoc.exists()) {
        const dogData = dogDoc.data();
        newDogs.push({
          name: dogData.name,
          userUid: auth.currentUser?.uid,
          id: dogId,
        });
      }
    }
    setDogs(newDogs);
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
  // const dogs: Dog[] = [
  //   { id: 1, value: 'Pepe' },
  //   { id: 2, value: 'Blacky' },
  //   { id: 3, value: 'Bolita de nieve' },
  // ];

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Configurar la hora actual a medianoche

    if (selectedDate && selectedDate >= currentDate) {
      setDate(selectedDate);
    } else {
      Alert.alert('Error', 'No puedes seleccionar una fecha pasada');
    }
  };

  const handleTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    setShowTimePicker(false);
    const currentTime = new Date();

    if (selectedTime) {
      // Crear una nueva fecha que combine la fecha actual y la hora seleccionada
      const combinedDateTime = new Date(date);
      combinedDateTime.setHours(selectedTime.getHours());
      combinedDateTime.setMinutes(selectedTime.getMinutes());
      combinedDateTime.setSeconds(selectedTime.getSeconds());

      // Validar si la hora combinada es futura en relación al momento actual
      if (combinedDateTime > currentTime) {
        setTime(selectedTime);
      } else {
        Alert.alert('Error', 'No puedes seleccionar una hora pasada para el día de hoy');
      }
    }
  };
  // const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
  //   setShowDatePicker(false);
  //   if (selectedDate) {
  //     setDate(selectedDate);
  //   }
  // };

  // const handleTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
  //   setShowTimePicker(false);
  //   if (selectedTime) {
  //     setTime(selectedTime);
  //   }
  // };

  const handleAppointmentSubmit = () => {
    // Lógica para enviar los datos del formulario
    // a la base de datos
    if (!selectedDog) {
      // Mostrar alerta si no se seleccionó un perro
      Alert.alert('Error', 'Debe seleccionar un perro');
    } else {
      // Proceder con la creación del paseo si se seleccionó un perro
      createWalk();
      console.log({ selectedDog, additionalComments, date, isImmediate });
    }
  };

  return (
    <ScrollView style={createWalkStyles.container}>
      <Text style={createWalkStyles.title}>Aqui podras pedir que paseen a tu mascota</Text>
      <Text style={createWalkStyles.label}>Selecciona la fecha y hora del paseo:</Text>
      <View style={createWalkStyles.buttonContainer}>
        <TouchableOpacity
          style={createWalkStyles.buttonLarge}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={createWalkStyles.buttonText}>Seleccionar Fecha</Text>
        </TouchableOpacity>
        <Text style={createWalkStyles.label}>Fecha Seleccionada: {date.toLocaleDateString()}</Text>
      </View>
      {showDatePicker && !isImmediate && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          disabled={isImmediate}
          onChange={(event: DateTimePickerEvent, selectedDate?: Date) =>
            handleDateChange(event, selectedDate)
          }
          style={createWalkStyles.picker}
        />
      )}
      <View style={createWalkStyles.buttonContainer}>
        <TouchableOpacity
          style={createWalkStyles.buttonLarge}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={createWalkStyles.buttonText}>Seleccionar Hora</Text>
        </TouchableOpacity>
        <Text style={createWalkStyles.label}>Hora Seleccionada: {time.toLocaleTimeString()}</Text>
      </View>
      {showTimePicker && !isImmediate && (
        <DateTimePicker
          value={time}
          mode="time"
          display="spinner"
          disabled={isImmediate}
          onChange={(event: DateTimePickerEvent, selectedTime?: Date) =>
            handleTimeChange(event, selectedTime)
          }
          style={createWalkStyles.picker}
        />
      )}
      <Text>Duración paseo</Text>
      <RNPickerSelect
        onValueChange={(value) => setWalkTime(value)}
        value={walkTime}
        items={[
          { label: 'Corto (~10 minutos)', value: '10' },
          { label: 'Medio (~20 minutos)', value: '20' },
          { label: 'Largo (~30 minutos)', value: '30' },
          { label: 'Muy largo (~45 minutos)', value: '45' },
        ]}
      />
      <View style={createWalkStyles.immediateContainer}>
        <Text style={createWalkStyles.label}>¿Pedir en este momento?</Text>
        <TouchableOpacity
          style={createWalkStyles.buttonShort}
          onPress={() => setIsImmediate(!isImmediate)}
        >
          <Text style={createWalkStyles.buttonText}>{isImmediate ? 'Sí' : 'No'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={createWalkStyles.label}>Selecciona un perro:</Text>
      <RNPickerSelect
        items={dogs.map((dog) => ({ label: dog.name, value: dog.id }))}
        onValueChange={(value) => setSelectedDog(value)}
      />
      <Text style={createWalkStyles.label}>Comentarios adicionales:</Text>
      <TextInput
        value={additionalComments}
        onChangeText={setAdditionalComments}
        multiline={true}
        style={createWalkStyles.input}
      />

      <TouchableOpacity style={createWalkStyles.buttonLargeEnd} onPress={handleAppointmentSubmit}>
        <Text style={createWalkStyles.buttonTextEnd}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={createWalkStyles.buttonLargeEnd}
        onPress={() => navigation.navigate('MainLayout')}
      >
        <Text style={createWalkStyles.buttonTextEnd}>Go back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default CreateWalkScreen;
