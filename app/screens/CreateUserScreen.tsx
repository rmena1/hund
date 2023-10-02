import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import createUserStyles from '../styles/createUserStyles';
import { useNavigation } from '@react-navigation/native';

export const CreateUserScreen = () => {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [isPaseadorChecked, setPaseadorChecked] = useState(false);
    const [isClienteChecked, setClienteChecked] = useState(false);

    return (
        <>
            <View style={createUserStyles.page}>
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
                    <TextInput
                        style={createUserStyles.input} 
                        value={birthday}
                        onChangeText={(newBirthday) => setBirthday(newBirthday)}
                    />
                </View>
                <Text style={createUserStyles.subtitle}>Quiero crear un perfil de:</Text>
               {/*  <View style={createUserStyles.container}>
                    <View style={createUserStyles.checkboxRow}>
                        <Checkbox
                        style={createUserStyles.checkbox}
                        value={isPaseadorChecked}
                        onValueChange={(newValue) => setPaseadorChecked(newValue)}
                        />
                        <Text style={createUserStyles.checkboxLabel}>Paseador</Text>
                    </View>
                    <View style={createUserStyles.checkboxRow}>
                        <Checkbox
                        style={createUserStyles.checkbox}
                        value={isClienteChecked}
                        onValueChange={(newValue) => setClienteChecked(newValue)}
                        />
                        <Text style={createUserStyles.checkboxLabel}>Cliente</Text>
                    </View>
                </View> */}
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