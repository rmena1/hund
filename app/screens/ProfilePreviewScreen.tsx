import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import profilePreviewStyles from '../styles/profilePreviewStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/index';

type Props = NativeStackScreenProps<RootStackParams, 'ProfilePreviewScreen'>;

export const ProfilePreviewScreen = ({ route }: Props) => {
    const { userName, phone, email, birthday } = route.params;

    const birthdayDate = birthday ? new Date(birthday) : null;

    const navigation = useNavigation();

    return (
        <>
            <View style={profilePreviewStyles.page}>
                <View style={profilePreviewStyles.group}>
                    <View style={profilePreviewStyles.container}>
                    </View>
                    <View style={profilePreviewStyles.avatar}>
                    </View>
                </View>
                <Text style={profilePreviewStyles.title}>Mi perfil</Text>
                <View style={profilePreviewStyles.textboxContainer}>
                    <Text style={profilePreviewStyles.label}>Nombre</Text>
                    <TextInput
                        style={profilePreviewStyles.input}
                        value={userName}
                    />
                </View>
                <View style={profilePreviewStyles.textboxContainer2}>
                    <Text style={profilePreviewStyles.label}>Teléfono</Text>
                    <TextInput
                        style={profilePreviewStyles.input}
                        value={phone}
                    />
                </View>
                <View style={profilePreviewStyles.textboxContainer3}>
                    <Text style={profilePreviewStyles.label}>Fecha de nacimiento</Text>
                    <TextInput
                        style={profilePreviewStyles.input}
                        value= { birthdayDate
                            ? birthdayDate.toLocaleDateString()
                            : ''}
                    />
                </View>
                <View style={profilePreviewStyles.textboxContainer4}>
                    <Text style={profilePreviewStyles.label}>Email</Text>
                    <TextInput
                        style={profilePreviewStyles.input}
                        value={email}
                    />
                </View>

                <TouchableOpacity
                    style={profilePreviewStyles.buttonPets}
                    onPress={() => { navigation.navigate('CreateMyDogsScreen')}}
                    disabled={false}
                >
                    <Text style={profilePreviewStyles.buttonTextPets}>Mis perros</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={profilePreviewStyles.buttonPay}
                    onPress={() => { }}
                    disabled={false}
                >
                    <Text style={profilePreviewStyles.buttonTextPay}>Mis métodos de pago</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={profilePreviewStyles.buttonCreate}
                    onPress={() => { }}
                    disabled={false}
                >
                    <Text style={profilePreviewStyles.buttonText}>Guardar cambios</Text>
                </TouchableOpacity>
            
            </View>
        </>
    )
}

export default ProfilePreviewScreen;
