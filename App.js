import React from 'react';
import { StyleSheet, Text, View , Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Login from './src/screens/Login'
import Main from './src/screens/Main'
import CreateAccount from './src/screens/CreateAccount'
import Legal from './src/screens/LegalScreen';
import BottomMenuItem from './src/components/BottomMenuItem/BottomMenuItem';
import Survey from './src/screens/Survey';

var OnBoardingScreen;

if (Platform.OS === 'android') {
  OnBoardingScreen = require('./src/components/OnBoardingScreen/OnBoardingScreen');
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./Image/loginilustration.jpg')}
    />
    
  );
}


function MyStack(){
  return(
    <Stack.Navigator 
      screenOptions={{
      headerStyle: {
        backgroundColor: '#f50087',
      },
      headerTintColor: '#fff',
      headerRight:( props) => (<LogoTitle {...props}/>)  ,
      headerLeft: (props) => (<LogoTitle {...props} />),
    }}>
        <Stack.Screen name="Main" component={BottomMenuItem}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="LegalScreen" component={Legal}/>
        <Stack.Screen name="Survey" component={Survey}/>

      </Stack.Navigator>
  )
}

var onBoardingComponent;
if(Platform.OS === 'android' ){
  console.log('Running on android!');
}else{
  console.log('Running on web!');
}


export default function App() {
  return (   
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Iowan Old Style'
  },
});
