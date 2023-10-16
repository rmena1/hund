import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import createMyDogsStyles from '../styles/createMyDogsStyles';
import { useNavigation } from '@react-navigation/native';

const CreateMyDogsScreen = () => {
    const navigation = useNavigation();

    const dogs = [
        {
            name: 'Firulais',
            age: '3 años',
            breed: 'Pitbull',
            description: 'Es un perro muy juguetón y le gusta mucho salir a pasear',
            reactivity: 'Alta',
        },
        {
            name: 'Kovu',
            age: '2 años',
            breed: 'Golden Retriever',
            description: 'Es un perro muy tranquilo y le gusta mucho salir a pasear',
            reactivity: 'Media',
        }
    ];

    const [expandedItem, setExpandedItem] = useState(null);

    const toggleExpansion = (title) => {
      if (expandedItem === title) {
        setExpandedItem(null);
      } else {
        setExpandedItem(title);
      }
    };

    const DeleteDog = (dog) => {
        console.log('Dog deleted');
        };

    const EditDog = (dog) => {
        navigation.navigate('MyDogEditScreen', { dog });
    };

  return (
    <View style={createMyDogsStyles.page}>
        <Text style={createMyDogsStyles.title}>Mis Perros</Text>
        <ScrollView style={createMyDogsStyles.table}>
            {dogs.map((dog, index) => (
                <View key={index}>
                <TouchableOpacity onPress={() => toggleExpansion(dog.name)}>
                    <View style={createMyDogsStyles.header}>
                        <View style={createMyDogsStyles.image}>
                        </View>
                        <View style={createMyDogsStyles.container}>
                            <Text style={createMyDogsStyles.headerText}>{dog.name}</Text>
                            <Text style={createMyDogsStyles.breedText}>{dog.breed}</Text>
                        </View>
                        <Text style={createMyDogsStyles.icon}>{expandedItem === dog.name ? '-' : '+'}</Text>
                    </View>
                </TouchableOpacity>
                {expandedItem === dog.name && (
                    <View style={createMyDogsStyles.content}>
                        <View style={ createMyDogsStyles.container2}>
                            <Text style={createMyDogsStyles.titleContent}>Edad</Text>
                            <Text style={createMyDogsStyles.textContent}>{dog.age}</Text>
                        </View>
                        <View style={ createMyDogsStyles.container2}>
                            <Text style={createMyDogsStyles.titleContent}>Descripción</Text>
                            <Text style={createMyDogsStyles.textContent}>{dog.description}</Text>
                        </View>
                        <View style={ createMyDogsStyles.container2}>
                            <Text style={createMyDogsStyles.titleContent}>Reactividad</Text>
                            <Text style={createMyDogsStyles.textContent}>{dog.reactivity}</Text>
                        </View>
                        <View style={createMyDogsStyles.buttonContainer}>
                            <View style={createMyDogsStyles.buttonDelete}>
                                <TouchableOpacity  onPress={() => { DeleteDog(dog) }} >
                                    <Text style={createMyDogsStyles.buttonDeleteText}>Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={createMyDogsStyles.buttonEdit}>
                                <TouchableOpacity onPress={() => { EditDog(dog) }}>
                                    <Text style={createMyDogsStyles.buttonEditText}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                </View>
            ))}
        </ScrollView>
        <View style={createMyDogsStyles.buttonAdd}>
            <TouchableOpacity>
                <Text style={createMyDogsStyles.buttonAddText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default CreateMyDogsScreen;


