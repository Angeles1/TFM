import React from 'react'
import EORTCQLQBR23 from '../components/SurveysType/EORTCQLQBR23'
import { withNavigation } from 'react-navigation';



const Survey = ( {route, navigation }) => {
  const { nameID } = route.params;
       
    return (
     
          <EORTCQLQBR23 nameID= {JSON.stringify(nameID)} navigation={navigation}></EORTCQLQBR23>
    )
}

export default withNavigation(Survey);