import React from 'react'
import { View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import GridCustom from '../components/GridCustom/GridCustom'


const OptionsScreen = () => {
    return (
        <ScrollView>
            <Image></Image>
            <DescriptionText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris et ante iaculis venenatis."></DescriptionText>
            <ScrollView>
            <GridCustom></GridCustom>
            </ScrollView>
        </ScrollView>
    )
}

export default OptionsScreen;