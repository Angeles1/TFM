import React from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ImageWall from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import SurveyModule from '../components/SurveyModule/SurveyModule'

import { withNavigation } from 'react-navigation';
import { ProgressBar, Colors,Divider } from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";
const PINK = 'rgba(213,0,249 ,1)';
const SWEETPINK = 'rgba(234,128,252 ,1)';

const SurveysScreeen = ({ navigation }) => {
   
    return (
        <ScrollView>
            <View >
                <View>
                    <DescriptionText text="Progreso semanal"></DescriptionText>
                    <View margin={0} marginTop={0} >
                    <Grid style={styles.container}>
                        <Col size={85}>
                            <ProgressBar progress={0.75}  color={PINK}/>
                        </Col>
                        <Col size={15}>
                            <Image source={require('../../Image/metaProgress.png')}  style={styles.tinyLogo}/>
     
                        </Col>
                    </Grid>
                    </View>
                </View>
                
            </View>
            
            <Divider />
                <SurveyModule navigation={navigation} nameID="BR23" 
                imagenURL="BR23.png" />
                <SurveyModule navigation={navigation} nameID="HADS" 
                imagenURL="HADS.png" />
                <SurveyModule navigation={navigation} nameID="TIL" 
                imagenURL="TIL.png" />
                <SurveyModule navigation={navigation} nameID="BR45" 
                imagenURL="TIL.png" />
                <SurveyModule  navigation={navigation} nameID="BRECON23"
                imagenURL="TIL.png" />
        </ScrollView>
    )
}



export default withNavigation(SurveysScreeen);


const styles = StyleSheet.create({
    container: {
        padding: 7,
        paddingTop: 0,
        margin:10,
        marginTop: 0,
        marginBottom:0,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 70,
        height: 70,
      },

});
