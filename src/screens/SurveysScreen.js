import React from 'react'
import { View, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import SurveyModule from '../components/SurveyModule/SurveyModule'
import { NavigationContainer, TabNavigator} from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { ProgressBar, Colors } from 'react-native-paper';


const SurveysScreeen = ({ navigation }) => {
   
    return (
        <ScrollView>
            <View >
                <Image></Image>
                <View>
                    <DescriptionText text="Tu progreso esta semana es:"></DescriptionText>
                    <View  style={styles.containerLoaderBar}>
                    <ProgressBar progress={0.5} color={Colors.red900}/>
                    </View>
                </View>
                
            </View>
            
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                    <SurveyModule navigation={navigation} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                    <SurveyModule navigation={navigation} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                    <SurveyModule navigation={navigation} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}}/>
            </ScrollView>
    )
}



export default withNavigation(SurveysScreeen);


const styles = StyleSheet.create({
    containerLoaderBar: {
        padding: 7,
        paddingTop: 0,
        margin:10,
        marginTop: 0,
        borderRadius: 10,
    },

});
