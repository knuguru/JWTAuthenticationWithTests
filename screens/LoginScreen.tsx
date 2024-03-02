import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 250,
    //fontFamily: "Quicksand-Bold",
    fontSize: 14,
    justifyContent: "flex-end"
  }
});

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      if (username === ""){
        alert("Username not provided")
        return;
      }
      if (password === ""){
        alert("Password not provided");
        return;
      }
     
      // Store token securely (AsyncStorage, SecureStore, etc.)
      const options = {
        method: 'POST',
        url: 'https://jwt-bearer-auth1.p.rapidapi.com/login',
        headers: {
          'content-type': 'application/json',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '8014cda62dmshf182fd22edad7cbp1e93cajsna8699d00f6f4',
          'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
        },
        data: {
          // email: 'knuguru@asdf.com',
          // password: 'Your_password123.'
          email: username,
          password: password
        }
      };

      const response = await axios.request(options);
      console.log(response.data);
      await AsyncStorage.setItem('jwtToken', response.data.token);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
      navigation.navigate('Home');
    } catch (error) {
      alert("Invalid Credentials")
      console.error(error);
    }
  };

  return (
    <View style={{padding: 15}}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={login} />
    </View>
  );
}
