import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import myDogEditStyles from '../styles/myDogEditStyles';
import { useNavigation } from '@react-navigation/native';

import { FIREBASE_AUTH } from "../../firebaseConfig";
import { FIREBASE_DB } from "../../firebaseConfig";
import { addDoc, updateDoc, getDoc, doc, collection } from "firebase/firestore";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/index';

type Props = NativeStackScreenProps<RootStackParams, 'MyDogEditScreen'>;

export const MyDogEditScreen = ({ route }: Props) => {
    const { isNew, dogID, dog } = route.params;

    const auth = FIREBASE_AUTH;

    const navigation = useNavigation();

    const [dogName, setDogName] = useState(dog.name);
    const [breed, setBreed] = useState(dog.breed);
    const [age, setAge] = useState(dog.age);
    const [reactivity, setReactivity] = useState(dog.reactivity);
    const [description, setDescription] = useState(dog.description);

    const options = ["Baja", "Media", "Alta"];

    const handleSubmitAdd = async () => {
        if (auth.currentUser?.uid) {
            const docData = {
              name: dogName,
              breed: breed,
              age: age,
              reactivity: reactivity,
              description: description,
            };
            
            const dogsCollection = collection(FIREBASE_DB, 'dogData');
            const docRef = await addDoc(dogsCollection, docData);
            
            const dogId = docRef.id;
            console.log('ID del nuevo perro:', dogId);

            const userDocRef = doc(FIREBASE_DB, "userData", auth.currentUser?.uid);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists()) {
              const userData = userDoc.data();
              
              const userDogs = userData.dogs || [];

              userDogs.push(dogId);
        
              await updateDoc(userDocRef, {
                dogs: userDogs,
              });
            }
          }
        navigation.navigate('CreateMyDogsScreen');
    };

    const handleSubmitEdit = async () => {
        const dogRef = doc(FIREBASE_DB, "dogData", dogID);
        const dogDoc = await getDoc(dogRef);
        
        if (dogDoc.exists()) {
        await updateDoc(dogRef, {
            name: dogName,
            breed: breed,
            age: age,
            reactivity: reactivity,
            description: description,
        });
        }
        navigation.navigate('CreateMyDogsScreen');
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
                {
                    isNew ? (
                        <TouchableOpacity
                        style={myDogEditStyles.buttonCreate}
                        onPress={() => { handleSubmitAdd() }}
                    >
                        <Text style={myDogEditStyles.buttonText}>Añadir</Text>
                    </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                        style={myDogEditStyles.buttonCreate}
                        onPress={() => { handleSubmitEdit() }}
                    >
                        <Text style={myDogEditStyles.buttonText}>Guardar Cambios</Text>
                    </TouchableOpacity>
                    )
                }
            
            </View>
        </>
    )
}

export default MyDogEditScreen;
