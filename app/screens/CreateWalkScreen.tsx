// Vista de formulario para crear un paseo

import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { homeStyles } from "../styles/homeStyles";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/navigationTypes";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConfig";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
interface Dog {
  id: number;
  value: string;
}
type Navigation = NavigationProp<RootStackParamList, "TabsBar">;

export const CreateWalkScreen: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const auth = FIREBASE_AUTH;
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState<Date>(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isImmediate, setIsImmediate] = useState(false);
  const [selectedDog, setSelectedDog] = useState<number | null>(null);
  const [additionalComments, setAdditionalComments] = useState<string>("");
  const createWalk = async () => {
    const docRef = await addDoc(collection(FIREBASE_DB, "paseos"), {
      email_usuario: auth.currentUser?.email,
      perro: selectedDog,
      fecha: date,
      inmediato: isImmediate,
      comentarios: additionalComments,
    });
    console.log("Document written with ID: ", docRef.id);
  };
  const [user, setUser] = useState("");
  const dogs: Dog[] = [
    { id: 1, value: "Pepe" },
    { id: 2, value: "Blacky" },
    { id: 3, value: "Bolita de nieve" },
  ];

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (
    event: DateTimePickerEvent,
    selectedTime?: Date
  ) => {
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
    <View>
      <Text>Selecciona la fecha y hora del paseo:</Text>
      <Button
        title="Seleccionar Fecha"
        onPress={() => setShowDatePicker(true)}
      />
      <Button
        title="Seleccionar Hora"
        onPress={() => setShowTimePicker(true)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event: DateTimePickerEvent, selectedDate?: Date) =>
            handleDateChange(event, selectedDate)
          }
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={(event: DateTimePickerEvent, selectedTime?: Date) =>
            handleTimeChange(event, selectedTime)
          }
        />
      )}

      <View>
        <Text>¿Pedir en este momento?</Text>
        <Button
          title={isImmediate ? "Sí" : "No"}
          onPress={() => setIsImmediate(!isImmediate)}
        />
      </View>

      <Text>Selecciona un perro:</Text>
      <RNPickerSelect
        items={dogs.map((dog) => ({
          label: dog.value,
          value: dog.id.toString(),
        }))}
        onValueChange={(value) => setSelectedDog(value)}
      />

      <Text>Comentarios adicionales:</Text>
      <TextInput
        value={additionalComments}
        onChangeText={setAdditionalComments}
        multiline={true}
      />

      <Button title="Enviar" onPress={handleAppointmentSubmit} />
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate("MainLayout")}
      />
    </View>
  );
};
export default CreateWalkScreen;
// return (
//     <View>
//       <Text>Crea tu paseo</Text>
//       <Button title="Crear paseo" onPress={() => createWalk()} />
//       <Button
//         title="Go back to Home"
//         onPress={() => navigation.navigate("MainLayout")}
//       />
//     </View>
//   );
// };
