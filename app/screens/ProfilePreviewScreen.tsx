import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import profilePreviewStyles from '../styles/profilePreviewStyles';
import { useNavigation } from '@react-navigation/native';

import { FIREBASE_AUTH } from '../../firebaseConfig';
import { FIREBASE_DB } from '../../firebaseConfig';
import { doc, onSnapshot } from 'firebase/firestore';

export const ProfilePreviewScreen = () => {
  const auth = FIREBASE_AUTH;

  const navigation = useNavigation();

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [birthday, setBirthday] = useState(0);

  const [photoUrl, setPhotoUrl] = useState(auth.currentUser?.photoURL);

  const birthdayDate = birthday ? new Date(birthday) : null;

  useEffect(() => {
    if (auth.currentUser?.uid) {
      const unsub = onSnapshot(doc(FIREBASE_DB, 'userData', auth.currentUser.uid), (doc) => {
        if (doc.data()) {
          const data = doc.data();
          const newUserData = {
            name: data?.name,
            phone: data?.phone,
            birthday: data?.birthday,
            photoUrl: data?.photoUrl,
          };
          setName(newUserData.name);
          setPhone(newUserData.phone);
          setBirthday(newUserData.birthday.seconds * 1000);
          setPhotoUrl(newUserData.photoUrl);
        }
      });
      return () => {
        unsub();
      };
    }
  }, []);

  return (
    <>
      <View style={profilePreviewStyles.page}>
        <View style={profilePreviewStyles.group}>
          <View style={profilePreviewStyles.container}></View>
          <Image
            source={photoUrl ? { uri: photoUrl } : require('../assets/images/Avatar.jpeg')}
            style={profilePreviewStyles.avatar}
          />
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
            value={birthdayDate ? birthdayDate.toLocaleDateString() : ''}
          />
        </View>
        <View style={profilePreviewStyles.textboxContainer4}>
          <Text style={profilePreviewStyles.label}>Email</Text>
          <TextInput style={profilePreviewStyles.input} value={auth.currentUser?.email || ''} />
        </View>

        <TouchableOpacity
          style={profilePreviewStyles.buttonPets}
          onPress={() => {
            navigation.navigate('CreateMyDogsScreen');
          }}
          disabled={false}
        >
          <Text style={profilePreviewStyles.buttonTextPets}>Mis perros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={profilePreviewStyles.buttonPay}
          onPress={() => {}}
          disabled={false}
        >
          <Text style={profilePreviewStyles.buttonTextPay}>Mis métodos de pago</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={profilePreviewStyles.buttonCreate}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          disabled={false}
        >
          <Text style={profilePreviewStyles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfilePreviewScreen;
