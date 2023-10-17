import React from "react";
import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors, Fonts } from "../styles/generalStyles";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { FIREBASE_DB } from "../../firebaseConfig";
import { setDoc, doc, onSnapshot } from "firebase/firestore";
import { loadImageFromGallery } from "../utils/helpers";
import { uploadImage, updateProfilePhoto } from "../utils/actions";

const UserProfile: React.FC = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = React.useState({
    name: "",
    phone: "",
    birthday: "",
  });
  // Local states for each input
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [birthday, setBirthday] = useState(user.birthday);

  const [photoUrl, setPhotoUrl] = useState(auth.currentUser?.photoURL);

  useEffect(() => {
    setName(user.name);
    setPhone(user.phone);
    setBirthday(user.birthday);
  }, [user]);

  useEffect(() => {
    if (auth.currentUser?.uid) {
      const unsub = onSnapshot(
        doc(FIREBASE_DB, "userData", auth.currentUser.uid),
        (doc) => {
          if (doc.data()) {
            const data = doc.data();
            const newUserData = {
              name: data?.name,
              phone: data?.phone,
              birthday: data?.birthday,
            };
            setUser(newUserData);
          }
        }
      );
      return () => {
        unsub();
      };
    }
  }, []);

  const updateState = React.useCallback((name: string, value: string) => {
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const saveChanges = async () => {
    if (auth.currentUser?.uid) {
      await setDoc(doc(FIREBASE_DB, "userData", auth.currentUser?.uid), {
        name: name,
        phone: phone,
        birthday: birthday,
      });
    }
  };

  const changePhoto = async () => {
    const result = await loadImageFromGallery([1, 1]);
    if (!result.status) {
      return;
    }
    if (auth.currentUser?.uid) {
      const resultUploadImage = await uploadImage(
        result.image,
        "pictures",
        auth.currentUser?.uid
      );
      if (!resultUploadImage.statusResponse) {
        Alert.alert("Error al subir la imagen de perfil. ", result.error);
        return;
      }
      const resultUpdateProfile = await updateProfilePhoto({
        photoURL: resultUploadImage.url,
      });
      if (!resultUpdateProfile.statusResponse) {
        Alert.alert("Error al actualizar la imagen de perfil.");
        return;
      }
      setPhotoUrl(resultUploadImage.url);
    } else {
      console.log("user id not found");
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={
            photoUrl
              ? { uri: photoUrl }
              : require("../assets/images/Avatar2.png")
          }
          style={styles.profileImage}
        />

        <TouchableOpacity style={styles.editButton} onPress={changePhoto}>
          <Ionicons name="create-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        onBlur={() => updateState("name", name)}
      />
      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
        onBlur={() => updateState("phone", phone)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value="email"
        //onChangeText={setEmail}
        //onBlur={() => updateState("email", email)}
      />
      <Text style={styles.label}>Cumpleaños</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Fecha de Nacimiento"
        value={birthday}
        onChangeText={setBirthday}
        onBlur={() => updateState("birthday", birthday)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mis perros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mis métodos de pago</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => saveChanges()}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editButton: {
    position: "absolute",
    right: 5,
    bottom: 5,
    backgroundColor: Colors.orange,
    padding: 8,
    borderRadius: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
    fontFamily: Fonts.montserratBold,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 20,
  },
  button: {
    alignItems: "center",
    height: 38,
    paddingVertical: 10,
    borderRadius: 18,
    backgroundColor: Colors.gray1,
    flexGrow: 1,
  },
  saveButton: {
    backgroundColor: Colors.orange,
    padding: 15,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default UserProfile;
