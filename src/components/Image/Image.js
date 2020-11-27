import React from 'react'
import { View, Text,Image, StyleSheet} from 'react-native'


const ImageComponent = () => {
    return (
        <Image source={require('../../../Image/loginilustration.jpg')}  style={styles.image}>
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