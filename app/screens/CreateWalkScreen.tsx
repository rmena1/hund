// Vista de formulario para crear un paseo

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createWalkStyles } from '../styles/createWalkStyles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
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
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isImmediate, setIsImmediate] = useState(false);
  const [selectedDog, setSelectedDog] = useState<number | null>(null);
  const [additionalComments, setAdditionalComments] = useState<string>('');
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
  const dogs: Dog[] = [
    { id: 1, value: 'Pepe' },
    { id: 2, value: 'Blacky' },
    { id: 3, value: 'Bolita de nieve' },
  ];

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleAppointmentSubmit = () => {
    // Lógica para enviar los datos del formulario
    // a la base de datos
    createWalk();
    console.log({ selectedDog, additionalComments, date, isImmediate });
  };

  return (
    <ScrollView style={createWalkStyles.container}>
      <TouchableOpacity
        style={createWalkStyles.containerTextEnd}
        onPress={() => navigation.navigate('MainLayout')}
      >
        <Ionicons style={createWalkStyles.iconBack} name="chevron-back" size={35} />
      </TouchableOpacity>
      <Text style={createWalkStyles.title}>Nuevo paseo</Text>
      <Text style={createWalkStyles.label}>Selecciona la fecha y hora del paseo:</Text>
      <View style={createWalkStyles.buttonContainer}>
        <TouchableOpacity
          style={createWalkStyles.buttonLarge}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={createWalkStyles.buttonText}>Seleccionar Fecha</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
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
      </View>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="spinner"
          onChange={(event: DateTimePickerEvent, selectedTime?: Date) =>
            handleTimeChange(event, selectedTime)
          }
          style={createWalkStyles.picker}
        />
      )}

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
        items={dogs.map((dog) => ({
          label: dog.value,
          value: dog.id.toString(),
        }))}
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
        <Text style={createWalkStyles.buttonTextEnd}>Solicitar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default CreateWalkScreen;
