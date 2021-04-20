import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState(null);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  return (
    <View style={styles.container}>
      <Text>hello working on your app!</Text>
      <Text>{name}</Text>
      <Image 
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
      />
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      onChangeText={text => setName(text)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
