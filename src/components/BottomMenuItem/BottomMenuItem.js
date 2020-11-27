import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SurveysScreen from '../../screens/SurveysScreen'
import SurveysResultScreen from '../../screens/SurveysResultScreen'
import OptionsScreen from '../../screens/OptionsScreen'
import Main from '../../screens/Main'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function BottomMenuItem() {
  return (
    <Tab.Navigator 

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        }
        if (route.name === 'Encuestas') {
          iconName = focused ? 'ios-list-box' : 'ios-list-box';
        }
        if (route.name === 'Resultados') {
          iconName = focused ? 'md-ribbon' : 'md-ribbon';
        }
        if (route.name === 'Opciones') {
          iconName = focused ? 'ios-options' : 'ios-options';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}

    initialRouteName={'Home'}
    tabBarOptions={{
       activeTintColor: '#fff',
       inactiveTintColor: 'lightgray',
       activeBackgroundColor: '#c4461c',
       inactiveBackgroundColor: '#b55031',
           style: {
                 backgroundColor: '#CE4418',
                 paddingBottom: 3,
                 height:80
           }
    }}
    
    >
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Encuestas" component={SurveysScreen} />
      <Tab.Screen name="Resultados" component={SurveysResultScreen} />
      <Tab.Screen name="Opciones" component={OptionsScreen} />
    </Tab.Navigator>
  );
}

export default BottomMenuItem