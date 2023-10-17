import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import walkerAtributeStyles from '../styles/walkerAtributeStyles';
import SelectDropdown from 'react-native-select-dropdown';
import Checkbox from 'expo-checkbox';
import Slider from '@react-native-community/slider';  

import { FIREBASE_AUTH } from "../../firebaseConfig";
import { FIREBASE_DB } from "../../firebaseConfig";
import { addDoc, updateDoc, getDoc, doc, collection } from "firebase/firestore";

const WalkerAtributeScreen = () => {

    const auth = FIREBASE_AUTH;


    const [checkboxStates, setCheckboxStates] = useState([false, false, false]);
    const dogSizes = ['Pequeño', 'Mediano', 'Grande'];
    const handleCheckboxChange = (index) => {
        const updatedStates = [...checkboxStates];
        updatedStates[index] = !updatedStates[index];
        setCheckboxStates(updatedStates);
    };

    const minSliderValue = 0;
    const maxSliderValue = 10;
    const [sliderValue, setSliderValue] = useState(0);
    const minDistanceSliderValue = 2;
    const maxDistanceSliderValue = 10;
    const [minDistanceValue, setMinDistanceValue] = useState(2);

    const [selectedValue, setSelectedValue] = useState("");
    const options = ["Español", "Ingles", "Ambos"];
    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
      };


    const handleSubmit = async () => {
        if (auth.currentUser?.uid) {
            const walkerDocRef = doc(FIREBASE_DB, "walkerData", auth.currentUser?.uid);
            const walkerDoc = await getDoc(walkerDocRef);
            if (walkerDoc.exists()) {
                await updateDoc(walkerDocRef, {
                    dog_sizes: checkboxStates,
                    max_walk_size: sliderValue,
                    max_distance: minDistanceValue,
                    languages: selectedValue,
                });
                // const walkerData = walkerDoc.data();
                // const walkerDogSize = walkerData.dog_sizes || [];
                // const walkerMaxWalkSize = walkerData.max_walk_size || 0;
                // const walkerMaxDistance = walkerData.max_distance || 0;
                // const walkerLanguages = walkerData.languages || [];
            }       

        }
        navigation.navigate('WalkerPreviewScreen');
    }

    const navigation = useNavigation();

    return (
        <View style={walkerAtributeStyles.page}>
            <Text style={walkerAtributeStyles.title}>Mis atributos</Text>
            <Text style={walkerAtributeStyles.subtitle}>Que tamaño de perros paseas?</Text>
            <Table style = {walkerAtributeStyles.table}> 
                {dogSizes.map((size, index) => (
                <View key={index} style={walkerAtributeStyles.checkboxWrapper}>
                    <Text style={walkerAtributeStyles.subtitleBlack}>{size}</Text>

                    <TouchableOpacity
                    onPress={() => handleCheckboxChange(index)}
                    style={walkerAtributeStyles.checkbox}
                    
                    >
                    <Text>{checkboxStates[index] ? 'Checked' : 'Unchecked'}</Text>
                    <Checkbox
                        value={checkboxStates[index]}
                        onValueChange={() => handleCheckboxChange(index)}
                    />
                    </TouchableOpacity>
                </View>
            ))}

            </Table>

            <Text style={walkerAtributeStyles.subtitle2}>Cuantos perros paseas al mismo tiempo?</Text>

            <View style = {walkerAtributeStyles.container}>
                <View style={walkerAtributeStyles.slidecontainer}>
                    <Text style={walkerAtributeStyles.minslider}>Min: {minSliderValue}</Text>
                    <Slider
                        style={walkerAtributeStyles.slider}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        value={sliderValue}
                        onValueChange={(value) => setSliderValue(value)}
                        minimumTrackTintColor="orange"  // Set the color of the selected part of the slider
                        maximumTrackTintColor="orange"  // Set the color of the unselected part of the slider
                        thumbTintColor="orange" // Set the color of the slider button
                    />
                    <Text style={walkerAtributeStyles.maxslider}>Max: {maxSliderValue}</Text>
                </View>
                    <Text style={walkerAtributeStyles.subtitleBlack}>{sliderValue} perros</Text>

            </View>
            
            <Text style={walkerAtributeStyles.subtitle3}>Cuál es la distancia máxima de tus paseos?</Text>

            <View style = {walkerAtributeStyles.container2}>

                <View style={walkerAtributeStyles.slidecontainer}>
                    <Text style={walkerAtributeStyles.minslider}>Min: {minDistanceSliderValue}</Text>
                    <Slider
                        style={walkerAtributeStyles.slider}
                        minimumValue={2}
                        maximumValue={10}
                        step={1}
                        value={minDistanceValue}
                        onValueChange={(value) => setMinDistanceValue(value)}
                        minimumTrackTintColor="orange"  // Set the color of the selected part of the slider
                        maximumTrackTintColor="orange"  // Set the color of the unselected part of the slider
                        thumbTintColor="orange" // Set the color of the slider button
                    />
                    <Text style={walkerAtributeStyles.maxslider}>Max: {maxDistanceSliderValue}</Text>
                </View>
                    <Text style={walkerAtributeStyles.subtitleBlack}>{minDistanceValue} Km</Text>
            </View>
            <Text style={walkerAtributeStyles.subtitle4}>Qué idiomas hablas?</Text>

            <View style={[walkerAtributeStyles.externalContainer, { alignItems: 'center' }]}>
                    <SelectDropdown
                        data={options}
                        onSelect={(selectedItem) => handleValueChange(selectedItem)}
                        buttonTextAfterSelection={(selectedItem) => selectedItem}
                        rowTextForSelection={(item) => item}
                        defaultValue={selectedValue}
                        buttonStyle={walkerAtributeStyles.selectdropdownContainer}
                        buttonTextStyle={walkerAtributeStyles.selectdropdownText}
                        dropdownStyle={walkerAtributeStyles.selectdropdownOptions}
                        defaultButtonText="Selecciona Idioma"
                        dropdownIconPosition={'right'}
                        selectedRowTextStyle={walkerAtributeStyles.selectdropdownSelectOption}
                        rowTextStyle={walkerAtributeStyles.selectdropdownTextOptions}
                    />
            </View>

            <TouchableOpacity
                style={walkerAtributeStyles.button}
                onPress={() => {
                  handleSubmit();
                }}
                disabled={false}
              >
                <Text style={walkerAtributeStyles.buttonText}>Guardar Cambios</Text>
              </TouchableOpacity>
            
        </View>
    )
}

export default WalkerAtributeScreen;