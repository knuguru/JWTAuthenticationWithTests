import React from 'react';
import { Text, Button, SafeAreaView} from 'react-native';
import MyButton from '../components/MyButton';


export default function HomeScreen({ navigation }) {
  const loginExistingUser = () => {
    navigation.navigate('Login');
  };

  const registerNewUser = () => {
    navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={{justifyContent: "center", alignContent: "center", alignSelf: "center"}}>
      {/* <MyButton name={"kadambari"}/> */}
      <Text>Welcome. What would you like to do today?</Text>
      {/* <Button title="Register" onPress={registerNewUser} /> */}
      <Button title="Login" onPress={loginExistingUser} />
    </SafeAreaView>
  );
}
