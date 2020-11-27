import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SurveysScreen from '../../screens/SurveysScreen'
import SurveysResultScreen from '../../screens/SurveysResultScreen'
import OptionsScreen from '../../screens/OptionsScreen'
import Main from '../../screens/Main'


const Tab = createBottomTabNavigator();

function BottomMenuItem() {
  return (
    <Tab.Navigator 
    initialRouteName={'Main'}
    tabBarOptions={{
       activeTintColor: '#fff',
       inactiveTintColor: 'lightgray',
       activeBackgroundColor: '#c4461c',
       inactiveBackgroundColor: '#b55031',
           style: {
                 backgroundColor: '#CE4418',
                 paddingBottom: 3
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