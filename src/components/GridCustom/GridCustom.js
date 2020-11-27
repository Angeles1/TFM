import React from 'react'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text,StyleSheet} from 'react-native';
import OptionButton from '../OptionButton/OptionButton'


const GridCustom = () => {
    return (
        <Grid style={styles.container}>
            <Col style={styles.containerCol}>
                <Row style={styles.containerRow}>
                    <OptionButton></OptionButton>
                </Row>
                <Row style={styles.containerRow}>
                    <OptionButton></OptionButton>
                </Row>
            </Col>
            <Col style={styles.containerCol}>
                <Row style={styles.containerRow}>
                    <OptionButton></OptionButton>
                </Row>
                <Row style={styles.containerRow}>
                    <OptionButton></OptionButton>
                </Row>            
            </Col>
            <Col style={styles.containerCol}>
                <Row style={styles.containerRow}>
                    <OptionButton></OptionButton>
                </Row>                
                <Row style={styles.containerRow}>
                    <OptionButton></OptionButton>
                </Row>
            </Col>
        </Grid>
    )
}


const styles = StyleSheet.create({
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

export default GridCustom;

