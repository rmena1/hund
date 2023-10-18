import { View, Text, Button, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/navigationTypes";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Fonts } from "../styles/generalStyles";

import addCardStyles from "../styles/addCardStyles";

type Navigation = NavigationProp<RootStackParamList, "AddCardScreen">;

const AddCardScreen = () => {
    const navigation = useNavigation<Navigation>();

    return (
        <View>
          <SafeAreaView style={addCardStyles.AndroidSafeArea}>
            <View style={addCardStyles.header}>
              <TouchableOpacity style={addCardStyles.backButton} onPress={()=> navigation.goBack()} >
                <Ionicons
                      name="chevron-back"
                      size={40}
                      color={Colors.gray1}
                    />
              </TouchableOpacity>
              <Text style={addCardStyles.headerTitle}> Agregar Tarjeta</Text>
            </View>
            

            <ScrollView contentContainerStyle={addCardStyles.scrollContainer}>
              <Text>Tarjeta 1</Text>
              <Text>Tarjeta 2</Text>
              <Text>Tarjeta 3</Text>
              <Text>Tarjeta 4</Text>
              <Text>Tarjeta 5</Text>
            </ScrollView>

            <View style={addCardStyles.buttonContainer}>
                <TouchableOpacity
                    style={addCardStyles.button}
                    onPress={() => {}}
                    disabled={false}
                >
                    <Text style={addCardStyles.buttonText}>Agregar Tarjeta</Text>
                </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      );
};

export default AddCardScreen;