import React from 'react';
import { View, Text, Button } from 'react-native';
import { FIREBASE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const List = ({ navigation }: any) => {
  const addTodo = async () => {
    const docRef = await addDoc(collection(FIREBASE_DB, 'todos'), {
      title: 'I am a test, created at: ' + new Date().toISOString(),
      done: false,
    });
    console.log('Document written with ID: ', docRef.id);
  };

  return (
    <View>
      <Text>List</Text>
      <Button title="Add Todo" onPress={() => addTodo()} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

export default List;
