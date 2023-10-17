import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import createUserStyles from '../styles/createUserStyles';
import { useNavigation } from '@react-navigation/native';

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

    const saveChanges = async () => {
    if (auth.currentUser?.uid) {
                await setDoc(doc(FIREBASE_DB, "userData", auth.currentUser?.uid), {
                name: userName,
                phone: phone,
                birthday: birthday,
                dogs: [],
            });
        }
    };

    const saveChangesWalker = async () => {
        if (auth.currentUser?.uid) {
                    await setDoc(doc(FIREBASE_DB, "walkerData", auth.currentUser?.uid), {
                    name: userName,
                    phone: phone,
                    birthday: birthday,
                    max_size: 0,
                    max_distance: 0,
                    languages: [],
                });
            }
        };

    const handleSubmit = () => {
        if (selectedValue === 'Paseador') {
            saveChangesWalker();
        navigation.navigate('WalkerPreviewScreen'); 
        } else if (selectedValue === 'Cliente') {
            saveChanges();
            navigation.navigate('ProfilePreviewScreen');
        }
    };

    return (
        <>
            <View style={createUserStyles.page}>
                <View style={createUserStyles.group}>
                    <View style={createUserStyles.container}>
                    </View>
                    <View style={createUserStyles.avatar}>
                    </View>
                    <View style={createUserStyles.button}>
                        <TouchableOpacity>
                        </TouchableOpacity>
                    </View>
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
