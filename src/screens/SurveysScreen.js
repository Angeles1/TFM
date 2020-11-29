import React from 'react'
import { View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import SurveyModule from '../components/SurveyModule/SurveyModule'

const SurveysScreeen = () => {
    return (
        <ScrollView>
        <View >
                <Image></Image>
                <DescriptionText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris et ante iaculis venenatis."></DescriptionText>
            </View>
            <ScrollView>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                <SurveyModule>
                </SurveyModule>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                <SurveyModule>
                </SurveyModule>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                <SurveyModule>
                </SurveyModule>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
               
            </ScrollView>
            
            </ScrollView>
    )
}

export default SurveysScreeen;