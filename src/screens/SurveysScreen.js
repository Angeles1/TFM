import React from 'react'
import { View, StyleSheet, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ImageWall from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import SurveyModule from '../components/SurveyModule/SurveyModule'

import { NavigationContainer, TabNavigator} from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { ProgressBar, Colors,Divider } from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";


const SurveysScreeen = ({ navigation }) => {
   
    return (
        <ScrollView>
            <View >
                <ImageWall></ImageWall>
                <View>
                    <DescriptionText text="Tu progreso esta semana es:"></DescriptionText>
                    <View margin={10} marginTop={0} >
                    <Grid style={styles.container}>
                    <Row>
                        <Col size={85}>
                            <ProgressBar  progress={0.5}  color={Colors.pink500}/>
                        </Col>
                        <Col size={15}>
                            <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>        
                        </Col>
                    </Row>
                    </Grid>

                    </View>
                </View>
                
            </View>
            
            <Divider />
                <SurveyModule navigation={navigation} nameID="HADS" />
            <Divider />
                <SurveyModule navigation={navigation} nameID="TIL"/>
            <Divider />
                <SurveyModule navigation={navigation} nameID="BR23"/>
            <Divider />
                <SurveyModule navigation={navigation} nameID="BR45"/>
            <Divider />
                <SurveyModule navigation={navigation} nameID="CON23"/>
            <Divider />
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
        width: 50,
        height: 20,
      },

});
