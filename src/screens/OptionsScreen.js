import React from 'react'
import { Image,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import GridCustom from '../components/GridCustom/GridCustom'


const OptionsScreen = () => {
    return (
        <ScrollView>

            <ScrollView>
            <GridCustom></GridCustom>
            </ScrollView>
        </ScrollView>
    )
}

export default OptionsScreen;
  