import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import Ionicons from 'react-native-vector-icons/Ionicons';



const SurveyModule = () => {
    return (
        <View style={styles.containerView}>

            <Grid style={styles.container}>
                <Row>
                    <Col>
                        <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>        
                    </Col>
                    <Col>
                        <Row style={{alignItems: 'center'}}>
                            <Col  size={3} >
                                <TouchableOpacity>
                                    <Text>          Comenzar</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col  size={1}>
                                <TouchableOpacity>
                                    <Ionicons name='md-ribbon'size='150%' color='gray' />
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row> 
                            <Col  size={3} style={{ marginTop:10}}>
                                <TouchableOpacity>
                                    <Text>          Continuar</Text>
                                </TouchableOpacity>
                            </Col >
                            <Col  size={1} style={{ marginTop:10}}>
                                <TouchableOpacity>
                                    <Ionicons name='md-ribbon'size='150%' color='gray' />
                                </TouchableOpacity>
                            </Col>
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
      width: 200,
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