import React from 'react';
import { View, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import MyGreeting from '../components/MyGreeting';
import CatFact from '../components/CatFact';

export default function HomeScreen({ navigation }) {
  const logout = async () => {
    // Remove token from storage
    await AsyncStorage.removeItem('jwtToken');
    navigation.navigate('Login');
  };

  const refreshToken = async () => {
    try {
      const token = await AsyncStorage.getItem("jwtToken");
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      console.log('refresh token', refreshToken);
      const options = {
        method: 'POST',
        url: 'https://jwt-bearer-auth1.p.rapidapi.com/refresh',
        headers: {
          'content-type': 'application/json',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '8014cda62dmshf182fd22edad7cbp1e93cajsna8699d00f6f4',
          'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
        },
        data: {
          refreshToken: refreshToken,
          token: token
        }
      };

      const response = await axios.request(options);
      console.log(response.data);
      // Remove token and refreshToken from storage and update them with new values
      await AsyncStorage.removeItem('jwtToken');
      await AsyncStorage.setItem('jwtToken', response.data.token);

      await AsyncStorage.removeItem('refreshToken');
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
      alert("Token has been refreshed. Token and RefreshToken values stored in AsyncStorage have been updated");

    } catch (error) {
      alert("Invalid Credentials")
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={{padding: 15, alignContent: "center"}}>
      <Text style={{fontSize: 16, fontWeight: "bold", alignContent: "center"}}>Welcome to Home Screen</Text>
      <MyGreeting ln={"fr"} name={"Kadambari"}/>
      <Text></Text>
      <Text style={{color: "blue"}}>Here is an interesting cat fact for you</Text>
      <CatFact/>
      <Text></Text>
      <View style={{ alignSelf: "center", justifyContent: "center" }}>
        <Button title='Refresh Token' onPress={refreshToken} />
        <Button title="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  );
}
