import React from 'react'
import { View, Text, ScrollView} from 'react-native'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import Card from '../components/Card/Card'


const SurveysResultScreeen = () => {
    return (
        <ScrollView>
             <View >
                <Image></Image>
                <DescriptionText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris et ante iaculis venenatis."></DescriptionText>
            </View>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            </ScrollView>
    )
}

export default SurveysResultScreeen;