import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import profilePreviewStyles from "../styles/walkerPreviewStyles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/index";

import { FIREBASE_AUTH } from "../../firebaseConfig";
import { FIREBASE_DB } from "../../firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

//type Props = NativeStackScreenProps<RootStackParams, 'ProfilePreviewScreen'>;

export const WalkerPreviewScreen = () => {
  const auth = FIREBASE_AUTH;

  //const { userName, phone, email, birthday } = route.params;
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [birthday, setBirthday] = useState(0);
  const birthdayDate = birthday ? new Date(birthday) : null;

  useEffect(() => {
    if (auth.currentUser?.uid) {
      const unsub = onSnapshot(
        doc(FIREBASE_DB, "walkerData", auth.currentUser.uid),
        (doc) => {
          if (doc.data()) {
            const data = doc.data();
            const newUserData = {
              name: data?.name,
              phone: data?.phone,
              birthday: data?.birthday,
            };
            setName(newUserData.name);
            setPhone(newUserData.phone);
            setBirthday(newUserData.birthday.seconds * 1000);
          }
        }
      );
      return () => {
        unsub();
      };
    }
  }, []);

  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={profilePreviewStyles.page}>
        <View style={profilePreviewStyles.group}>
          <View style={profilePreviewStyles.container}></View>
          <View style={profilePreviewStyles.avatar}></View>
        </View>
        <Text style={profilePreviewStyles.title}>Mi perfil</Text>
        <View style={profilePreviewStyles.textboxContainer}>
          <Text style={profilePreviewStyles.label}>Nombre</Text>
          <TextInput style={profilePreviewStyles.input} value={name} />
        </View>
        <View style={profilePreviewStyles.textboxContainer2}>
          <Text style={profilePreviewStyles.label}>Teléfono</Text>
          <TextInput style={profilePreviewStyles.input} value={phone} />
        </View>
        <View style={profilePreviewStyles.textboxContainer3}>
          <Text style={profilePreviewStyles.label}>Fecha de nacimiento</Text>
          <TextInput
            style={profilePreviewStyles.input}
            value={birthdayDate ? birthdayDate.toLocaleDateString() : ""}
          />
        </View>
        {/* <View style={profilePreviewStyles.textboxContainer4}>
                    <Text style={profilePreviewStyles.label}>Email</Text>
                    <TextInput
                        style={profilePreviewStyles.input}
                        value={email}
                    />
                </View> */}

        <TouchableOpacity
          style={profilePreviewStyles.buttonPets}
          onPress={() => {
            navigation.navigate("WalkerAtributeScreen");
          }}
          disabled={false}
        >
          <Text style={profilePreviewStyles.buttonTextPets}>Mis atributos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={profilePreviewStyles.buttonPay}
          onPress={() => {}}
          disabled={false}
        >
          <Text style={profilePreviewStyles.buttonTextPay}>Mi cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={profilePreviewStyles.buttonCreate}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          disabled={false}
        >
          <Text style={profilePreviewStyles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default WalkerPreviewScreen;
