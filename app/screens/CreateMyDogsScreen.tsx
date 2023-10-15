import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import createMyDogsStyles from '../styles/createMyDogsStyles';

const CreateMyDogsScreen = () => {
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

  return (
    <View style={createMyDogsStyles.page}>
        <Text style={createMyDogsStyles.title}>Mis Perros</Text>
        <ScrollView style={createMyDogsStyles.table}>
            {dogs.map((item, index) => (
                <View key={index}>
                <TouchableOpacity onPress={() => toggleExpansion(item.name)}>
                    <View style={createMyDogsStyles.header}>
                        <View style={createMyDogsStyles.image}>
                        </View>
                        <View style={createMyDogsStyles.container}>
                            <Text style={createMyDogsStyles.headerText}>{item.name}</Text>
                            <Text style={createMyDogsStyles.breedText}>{item.breed}</Text>
                        </View>
                        <Text style={createMyDogsStyles.icon}>{expandedItem === item.name ? '-' : '+'}</Text>
                    </View>
                </TouchableOpacity>
                {expandedItem === item.name && (
                    <View style={createMyDogsStyles.content}>
                        <View style={ createMyDogsStyles.container2}>
                            <Text style={createMyDogsStyles.titleContent}>Edad</Text>
                            <Text style={createMyDogsStyles.textContent}>{item.age}</Text>
                        </View>
                        <View style={ createMyDogsStyles.container2}>
                            <Text style={createMyDogsStyles.titleContent}>Descripción</Text>
                            <Text style={createMyDogsStyles.textContent}>{item.description}</Text>
                        </View>
                        <View style={ createMyDogsStyles.container2}>
                            <Text style={createMyDogsStyles.titleContent}>Reactividad</Text>
                            <Text style={createMyDogsStyles.textContent}>{item.reactivity}</Text>
                        </View>
                    </View>
                )}
                </View>
            ))}
        </ScrollView>
        <View style={createMyDogsStyles.button}>
            <TouchableOpacity>
                <Text style={createMyDogsStyles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default CreateMyDogsScreen;


