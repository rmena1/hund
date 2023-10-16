import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import walkerAtributeStyles from '../styles/walkerAtributeStyles';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from '@react-native-community/checkbox';



const WalkerAtributeScreen = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const options = ["Español", "Ingles"];

    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
      };


    const navigation = useNavigation();
    return (
        <View style={walkerAtributeStyles.page}>
            <Text style={walkerAtributeStyles.title}>Mis Atributos</Text>
            <Text style={walkerAtributeStyles.subtitle}>Que tamaño de perros paseas?</Text>
            <View style = {walkerAtributeStyles.table}> 

            </View>

            <Text style={walkerAtributeStyles.subtitle2}>Cuantos perros paseas al mismo tiempo?</Text>

            <View style = {walkerAtributeStyles.container}>
            </View>
            <Text style={walkerAtributeStyles.subtitle3}>Cuál es la distancia máxima de tus paseos?</Text>

            <View style = {walkerAtributeStyles.container2}>
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
                  /* register(); */
                  //navigation.navigate("CreateUserScreen", { email });
                }}
                disabled={false}
              >
                <Text style={walkerAtributeStyles.buttonText}>Guardar Cambios</Text>
              </TouchableOpacity>
            
        </View>
    )
}

export default WalkerAtributeScreen;