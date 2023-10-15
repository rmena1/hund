import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import createUserStyles from '../styles/createUserStyles';
import { useNavigation } from '@react-navigation/native';

export const CreateUserScreen = () => {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [isPickerDateShow, setIsPickerDateShow] = useState(false);
    const [birthday, setBirthday] = useState(null);

		const [isWalkerChecked, setWalkerChecked] = useState(false);
    const [isClientChecked, setClientChecked] = useState(false);

    const showPickerDate = () => {
        setIsPickerDateShow(true);
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || birthday;
        setBirthday(currentDate);
        setIsPickerDateShow(false); // Cierra el selector de fecha
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
                        onChangeText={(newPhone) => setPhone(newPhone)}
                    />
                </View>
                <View style={createUserStyles.textboxContainer3}>
                    <Text style={createUserStyles.label}>Fecha de nacimiento</Text>
										<View style={createUserStyles.btnDateTime}>
											<TouchableOpacity onPress={showPickerDate}>
													<Text style={createUserStyles.textButtonDate}>
															{birthday
																	? birthday.toLocaleDateString()
																	: 'Seleccionar Fecha'}
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
                <View style={createUserStyles.containerCheckbox}>
                    <View style={createUserStyles.checkboxRow}>
                        <Checkbox
                        style={createUserStyles.checkbox}
                        value={isWalkerChecked}
                        onValueChange={(newValue) => setWalkerChecked(newValue)}
                        />
                        <Text style={createUserStyles.checkboxLabel}>Paseador</Text>
                    </View>
                    <View style={createUserStyles.checkboxRow}>
                        <Checkbox
                        style={createUserStyles.checkbox}
                        value={isClientChecked}
                        onValueChange={(newValue) => setClientChecked(newValue)}
                        />
                        <Text style={createUserStyles.checkboxLabel}>Cliente</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={createUserStyles.buttonCreate}
                    onPress={() => { }}
                    disabled={false}
                >
                    <Text style={createUserStyles.buttonText}>Crear perfil</Text>
                </TouchableOpacity>
            
            </View>
        </>
    )
}

export default CreateUserScreen;
