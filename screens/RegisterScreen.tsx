import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      //   const response = await axios.post(
      //     `${Constants.manifest.extra.apiBaseUrl}/login`,
      //     { username, password }
      //   );
      //   const token = response.data.token;
      //   // Store token securely (AsyncStorage, SecureStore, etc.)
      const options = {
        method: 'POST',
        url: 'https://jwt-bearer-auth1.p.rapidapi.com/register',
        headers: {
          'content-type': 'application/json',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '8014cda62dmshf182fd22edad7cbp1e93cajsna8699d00f6f4',
          'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
        },
        data: {
          email: 'kadi@gdomain.com',
          password: 'Your_password123.',
          role: "asfasdf"
        }
      };

      const response = await axios.request(options);
      console.log(response);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={registerUser} />
    </View>
  );
}
