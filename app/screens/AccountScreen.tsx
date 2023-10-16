import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/navigationTypes";

type Navigation = NavigationProp<RootStackParamList, "AccountScreen">;

const AccountScreen = () => {
    const navigation = useNavigation<Navigation>();

    return (
        <View>
          <Text>Settings Screen</Text>
          <Button title="Métodos de Pago" onPress={() => navigation.navigate('PaymentMethodScreen')} />
        </View>
      );
};

export default AccountScreen;