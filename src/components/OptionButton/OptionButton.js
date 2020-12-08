import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from '../Modal/Modal'

const styles = StyleSheet.create({
    
    tinyLogo: {
      width: 120,
      height: 120,
    },
   
  });

const ObtionButton = (props) => {


  var image;
    if (props.ruta === 'MiCuenta') {
      image=require('../../../Image/OptionsAccount.png');
    }

    if (props.ruta === 'Tutorial') {
      image=require('../../../Image/OptionsHOwWork.png');
    }
    if (props.ruta === 'Contacto') {
      image=require('../../../Image/optionsWritte.png');
    }
    if (props.ruta === 'AvisoLegal') {
      image=require('../../../Image/optionsLegal.png');
    }
    if (props.ruta === 'ElEquipo') {
      image=require('../../../Image/OptionsAboutUs.png');
    }
    if (props.ruta === 'CerrarSesion') {
      image=require('../../../Image/OptionsClose.png');
    }




    return (
        <TouchableOpacity onPress={()=> alert('image clicked'+ props.ruta)}>
            <Image style={styles.tinyLogo} source={image}/>        
        </TouchableOpacity>
    )
}

export default ObtionButton;
   
