import React from 'react'
import { View, Text} from 'react-native'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import EORTCQLQBR23 from '../components/SurveysType/EORTCQLQBR23'
import { withNavigation } from 'react-navigation';



const Survey = ({ navigation }) => {
    return (
        <View>
          <EORTCQLQBR23 navigation={navigation}></EORTCQLQBR23>
        </View>
    )
}

export default withNavigation(EORTCQLQBR23);