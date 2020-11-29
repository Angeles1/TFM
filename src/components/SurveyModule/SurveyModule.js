import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";


const SurveyModule = () => {
    return (
        <View style={styles.containerView}>

            <Grid style={styles.container}>
                <Row>
                    <Col>
                        <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>        
                    </Col>
                    <Col>
                        <Row>
                        <Col>
                            <Text>Comenzar</Text></Col>
                            <Col>
                            <Text>Comenzar</Text></Col>
                        </Row>
                        <Row> 
                            <Col>
                            <Text>Continuar</Text></Col>
                            <Col>
                            <Text>Continuar</Text></Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Grid>
        </View>
   )
}



  const styles = StyleSheet.create({
    containerView:{
        margin:2,
    },
    tinyLogo: {
      width: 150,
      height: 90,
    },
    
    container:{
        margin:20,
        marginTop: 0,
        marginBottom:3,
     
      },
    containerCol:{
        margin:3,
        alignItems: 'center',
        
    
    },
    containerRow:{
        margin:5,
        alignItems: 'center',
  
      },
})

export default SurveyModule;