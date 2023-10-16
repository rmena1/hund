import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import myDogEditStyles from '../styles/myDogEditStyles';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/index';

type Props = NativeStackScreenProps<RootStackParams, 'MyDogEditScreen'>;

export const MyDogEditScreen = ({ route }: Props) => {
    const { dog } = route.params;

    const [dogName, setDogName] = useState(dog.name);
    const [breed, setBreed] = useState(dog.breed);
    const [age, setAge] = useState(dog.age);
    const [reactivity, setReactivity] = useState(dog.reactivity);
    const [description, setDescription] = useState(dog.description);

    const options = ["Baja", "Media", "Alta"];

    const handleSubmit = () => {

    };

    return (
        <>
            <View style={myDogEditStyles.page}>
                <View style={myDogEditStyles.group}>
                    <View style={myDogEditStyles.container}>
                    </View>
                    <View style={myDogEditStyles.avatar}>
                    </View>
                    <View style={myDogEditStyles.button}>
                        <TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={myDogEditStyles.title}>Mi perro</Text>
                <View style={myDogEditStyles.textboxContainer}>
                    <Text style={myDogEditStyles.label}>Nombre</Text>
                    <TextInput
                        style={myDogEditStyles.input}
                        value={dogName}
                        onChangeText={(newName) => setDogName(newName)}
                    />
                </View>
                <View style={myDogEditStyles.textboxContainer2}>
                    <Text style={myDogEditStyles.label}>Raza</Text>
                    <TextInput
                        style={myDogEditStyles.input}
                        value={breed}
                        onChangeText={(newBreed) => setBreed(newBreed)}
                    />
                </View>
                <View style={myDogEditStyles.textboxContainer3}>
                    <Text style={myDogEditStyles.label}>Edad</Text>
                        <TextInput
                            style={myDogEditStyles.input}
                            value={age}
                            onChangeText={(newAge) => setAge(newAge)}
                        />
                </View>
                <View style={myDogEditStyles.textboxContainer4}>
                    <Text style={myDogEditStyles.label}>Descripción</Text>
                        <TextInput
                            style={myDogEditStyles.inputDescription}
                            multiline={true}
                            value={description}
                            onChangeText={(newDescription) => setDescription(newDescription)}
                        />
                </View>
                <View style={myDogEditStyles.textboxContainer5}>
                    <Text style={myDogEditStyles.label}>Reactividad</Text>
                    <View style={[myDogEditStyles.externalContainer, { alignItems: 'center' }]}>
                        <SelectDropdown
                            data={options}
                            onSelect={(selectedItem) => setReactivity(selectedItem)}
                            buttonTextAfterSelection={(selectedItem) => selectedItem}
                            rowTextForSelection={(item) => item}
                            defaultValue={reactivity}
                            buttonStyle={myDogEditStyles.selectdropdownContainer}
                            buttonTextStyle={myDogEditStyles.selectdropdownText}
                            dropdownStyle={myDogEditStyles.selectdropdownOptions}
                            defaultButtonText="Selecciona una opción"
                            dropdownIconPosition={'right'}
                            selectedRowTextStyle={myDogEditStyles.selectdropdownSelectOption}
                            rowTextStyle={myDogEditStyles.selectdropdownTextOptions}
                        />
                    </View>
                </View>
                    <TouchableOpacity
                        style={myDogEditStyles.buttonCreate}
                        onPress={() => { handleSubmit() }}
                    >
                        <Text style={myDogEditStyles.buttonText}>Guardar Cambios</Text>
                    </TouchableOpacity>
            
            </View>
        </>
    )
}

export default MyDogEditScreen;
