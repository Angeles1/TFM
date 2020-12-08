import React from 'react'
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Text} from 'react-native';
import OptionButton from '../OptionButton/OptionButton'
const PINK = 'rgba(213,0,249 ,1)';


const GridCustom = () => {
    return (
        <Grid style={styles.container}>
            <Col style={styles.containerCol}>
                <Row style={styles.containerRow}>
                    <OptionButton ruta="MiCuenta" imagen="" ></OptionButton>
                </Row>
                <Row style={styles.containerRow}>
                    <Text style={styles.texto}>Mi cuenta</Text>
                </Row>
                <Row style={styles.containerRow}>
                    <OptionButton ruta="Tutorial" imagen=""></OptionButton>
                </Row>
                <Row style={styles.containerRow}>
                    <Text style={styles.texto}>Cómo funciona</Text>
                </Row>
                <Row style={styles.containerRow}>
                    <OptionButton ruta="Contacto" imagen=""></OptionButton>
                </Row>
                <Row style={styles.containerRow}>
                    <Text style={styles.texto}>Escríbenos</Text>
                </Row>
            
            </Col>
           
            <Col style={styles.containerCol}>
            <Row style={styles.containerRow}>
                    <OptionButton ruta="AvisoLegal" imagen=""></OptionButton>
                </Row>  
                <Row style={styles.containerRow}>
                    <Text style={styles.texto}>Aviso legal</Text>
                </Row>       
                <Row style={styles.containerRow}>
                    <OptionButton ruta="ElEquipo" imagen=""></OptionButton>
                </Row>  
                <Row style={styles.containerRow}>
                    <Text style={styles.texto}>Sobre nosotros</Text>
                </Row>              
                <Row style={styles.containerRow}>
                    <OptionButton ruta="CerrarSesion" imagen=""></OptionButton>
                </Row>
                <Row style={styles.containerRow}>
                    <Text style={styles.texto}>Cerrar sesión</Text>
                </Row>
            </Col>
        </Grid>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        alignItems: 'center'
     
      },
    containerCol:{
        margin:10,
        marginLeft:3,
        marginRight:3,
        alignItems: 'center',
        
    
    },
    containerRow:{
        margin:10,
        marginLeft:3,
        marginRight:3,
        alignItems: 'center',
  
      },
      texto:{
          fontWeight: 'bold',
          color: PINK,
          fontSize:18,
      }
})

export default GridCustom;

