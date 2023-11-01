import { View, Text, Button } from 'react-native';
import React from 'react'; /* 
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/navigationTypes'; */
import { FIREBASE_AUTH } from '../../firebaseConfig';

//type Navigation = NavigationProp<RootStackParamList, 'DetailsScreen'>;

const DetailsScreen = () => {
  //const navigation = useNavigation<Navigation>();

  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Sign out" onPress={() => FIREBASE_AUTH.signOut()} />
    </View>
  );
};

export default DetailsScreen;
