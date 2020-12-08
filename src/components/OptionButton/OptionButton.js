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
    return (
        <TouchableOpacity onPress={()=> alert('image clicked'+ props.ruta)}>
            <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>        
        </TouchableOpacity>
    )
}

export default ObtionButton;
   
