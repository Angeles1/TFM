import React from 'react'
import { View, Text,Image, StyleSheet} from 'react-native'


const ImageComponent = () => {
    return (
        <Image source={require('../../../Image/loginilustration2.png')}  style={styles.image}>
        </Image>

    )
}

export default ImageComponent;
   
const styles = StyleSheet.create({
    image: {
        width:'auto',
        height: 250,
        resizeMode: "cover",
        justifyContent: "center",
      },
   
});