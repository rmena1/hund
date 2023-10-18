import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import createUserStyles from '../styles/createUserStyles';
import { useNavigation } from '@react-navigation/native';

import { loadImageFromGallery } from "../utils/helpers";
import { uploadImage, updateProfilePhoto } from "../utils/actions";

import { FIREBASE_AUTH } from "../../firebaseConfig";
import { FIREBASE_DB } from "../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

export const CreateUserScreen = () => {
    const auth = FIREBASE_AUTH;

    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [isPickerDateShow, setIsPickerDateShow] = useState(false);
    const [birthday, setBirthday] = useState(null);

    const [photoUrl, setPhotoUrl] = useState(auth.currentUser?.photoURL);

    const [selectedValue, setSelectedValue] = useState("");

    const options = ["Cliente", "Paseador"];

    const showPickerDate = () => {
        setIsPickerDateShow(true);
    };

    const onChangePhone = (newPhone) => {
        const numericValue = newPhone.replace(/[^0-9]/g, '');
        const truncatedValue = numericValue.slice(0, 9);

        setPhone(truncatedValue);
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || birthday;
        setBirthday(currentDate);
        setIsPickerDateShow(false);
    };

    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
    };

    const saveChangesUser = async () => {
        if (auth.currentUser?.uid) {
            await setDoc(doc(FIREBASE_DB, "userData", auth.currentUser?.uid), {
                name: userName,
                phone: phone,
                birthday: birthday,
                dogs: [],
                photoUrl: photoUrl,
            });
        }
    };

    const saveChangesWalker = async () => {
        if (auth.currentUser?.uid) {
            await setDoc(doc(FIREBASE_DB, "walkerData", auth.currentUser?.uid), {
                name: userName,
                phone: phone,
                birthday: birthday,
                dog_sizes: [],
                max_walk_size: 0,
                max_distance: 0,
                languages: [],
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

    const handleSubmit = () => {
        if (selectedValue === 'Paseador') {
            saveChangesWalker();
            navigation.navigate('WalkerPreviewScreen'); 
        } else if (selectedValue === 'Cliente') {
            saveChangesUser();
            navigation.navigate('ProfilePreviewScreen');
        }
    };

    return (
        <>
            <View style={createUserStyles.page}>
                <View style={createUserStyles.group}>
                    <View style={createUserStyles.container}>
                    </View>
                    <Image
                        source={
                            photoUrl
                            ? { uri: photoUrl }
                            : require("../assets/images/Avatar.jpeg")
                        }
                        style={createUserStyles.avatar}
                        />
                    <TouchableOpacity style={createUserStyles.button} onPress={changePhoto}>
                        <Ionicons name="create-outline" size={15} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={createUserStyles.title}>Crear perfil</Text>
                <View style={createUserStyles.textboxContainer}>
                    <Text style={createUserStyles.label}>Nombre</Text>
                    <TextInput
                        style={createUserStyles.input}
                        value={userName}
                        onChangeText={(newName) => setUserName(newName)}
                    />
                </View>
                <View style={createUserStyles.textboxContainer2}>
                    <Text style={createUserStyles.label}>Teléfono</Text>
                    <TextInput
                        style={createUserStyles.input}
                        value={phone}
                        onChangeText={(newPhone) => onChangePhone(newPhone)}
                    />
                </View>
                <View style={createUserStyles.textboxContainer3}>
                    <Text style={createUserStyles.label}>Fecha de nacimiento</Text>
                    <View style={createUserStyles.btnDateTime}>
                        <TouchableOpacity onPress={showPickerDate}>
                            <Text style={createUserStyles.textButtonDate}>
                                {birthday
                                    ? birthday.toLocaleDateString()
                                    : 'Selecciona una fecha'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {isPickerDateShow && (
                        <DateTimePicker
                            value={birthday || new Date()}
                            mode="date"
                            display="calendar"
                            onChange={onChangeDate}
                        />
                    )}
                </View>
                <Text style={createUserStyles.subtitle}>Quiero crear un perfil de:</Text>

                <View style={[createUserStyles.externalContainer, { alignItems: 'center' }]}>
                    <SelectDropdown
                        data={options}
                        onSelect={(selectedItem) => handleValueChange(selectedItem)}
                        buttonTextAfterSelection={(selectedItem) => selectedItem}
                        rowTextForSelection={(item) => item}
                        defaultValue={selectedValue}
                        buttonStyle={createUserStyles.selectdropdownContainer}
                        buttonTextStyle={createUserStyles.selectdropdownText}
                        dropdownStyle={createUserStyles.selectdropdownOptions}
                        defaultButtonText="Selecciona una opción"
                        dropdownIconPosition={'right'}
                        selectedRowTextStyle={createUserStyles.selectdropdownSelectOption}
                        rowTextStyle={createUserStyles.selectdropdownTextOptions}
                    />
                </View>
                {selectedValue ?
                    <TouchableOpacity
                        style={createUserStyles.buttonCreate}
                        onPress={() => { handleSubmit() }}
                        disabled={!selectedValue}
                    >
                        <Text style={createUserStyles.buttonText}>Crear perfil</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity
                        style={createUserStyles.buttonCreateDisabled}
                        onPress={() => { handleSubmit() }}
                        disabled={!selectedValue}
                    >
                        <Text style={createUserStyles.buttonText}>Crear perfil</Text>
                    </TouchableOpacity>
                }

            </View>
        </>
    )
}

export default CreateUserScreen;
