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
import SurveyCompleted from './src/components/SurveyCompletedScreen/SurveyCompletedScreen';

import Survey from './src/screens/Survey';

const PINK = 'rgba(213,0,249 ,1)';
const SWEETPINK = 'rgba(234,128,252 ,1)';

var OnBoardingScreen;

if (Platform.OS === 'android') {
  OnBoardingScreen = require('./src/components/OnBoardingScreen/OnBoardingScreen');
}


function LogoTitle() {
  return (
    <Image
      style={{ width: 60, height: 70 }}
      source={require('./Image/logoRibbon.png')}
    />
    
  );
}



function MyStack(){
  return(

      <Stack.Navigator 
        screenOptions={{
          title: "Seguimiento de Calidad de vida",
        headerStyle: {
          backgroundColor: SWEETPINK,
        },
        headerTintColor: "white",
        headerRight:( props) => (<LogoTitle {...props}/>)  ,
        //headerLeft: (props) => (<LogoTitle {...props} />),
      }}>
          <Stack.Screen name="Main" component={BottomMenuItem}  />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown: false}}/>
          <Stack.Screen name="LegalScreen" component={Legal} options={{headerShown: false}} />
          <Stack.Screen name="Survey" component={Survey} options={{headerShown: false}} />    
          <Stack.Screen name="SurveyCompleted" component={SurveyCompleted} options={{headerShown: false}} />    

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
