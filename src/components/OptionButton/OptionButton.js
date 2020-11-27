import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    tinyLogo: {
      width: 120,
      height: 120,
    },
   
  });

const ObtionButton = () => {
    return (
        <TouchableOpacity onPress={()=> alert('image clicked')}>
            <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>        
        </TouchableOpacity>
    )
}

export default ObtionButton;
   
