import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, Linking, Button} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import Ionicons from 'react-native-vector-icons/Ionicons';

const PINK = 'rgba(213,0,249 ,1)';

const SurveyModule = ({nameID, imagenURL, navigation}) => {
var image;
if (nameID === 'BR23') {
    image=require('../../../Image/BR23.png');
  }
  if (nameID === 'TIL') {
    image= require('../../../Image/TIL.png');
  }
  if (nameID === 'HADS') {
    image=require('../../../Image/HADS.png');
  }
  if (nameID === 'BR45') {
    image=require('../../../Image/BR45.png');
  }
  if (nameID === 'BRECON23') {
    image=require('../../../Image/BRECON23.png');
  }
   
       return (
        <View style={styles.containerView}>
            <Grid style={styles.container}>
                <Row>
                    <Col>
                        <Image  source={image} style={styles.tinyLogo}/>
                    </Col>
                    <Col>
                        <Row style={{alignItems: 'center'}}>
                            <Col  size={3} >
                                <TouchableOpacity>
                                    <Text  style={styles.texto} onPress={() =>
                                        navigation.navigate('Survey',
                                        {
                                            nameID: nameID,
                                        }
                                        )}>Comenzar</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col  size={1}>
                                <TouchableOpacity>
                                    <Ionicons name='ios-add-circle-outline' size= {30} color= {PINK} />
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
        margin:10,
        marginTop: 3,
        marginBottom:0,
        backgroundColor:"white"
     
      },
    containerCol:{
        margin:3,
        alignItems: 'center',
        
    
    },
    containerRow:{
        margin:5,
        alignItems: 'center',
  
      },
      texto:{
        fontWeight: 'bold',
        color: PINK,
        fontSize:18,
    }
})

export default SurveyModule;