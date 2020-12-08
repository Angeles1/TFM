import React from 'react'
import { View, Image, ScrollView,StyleSheet} from 'react-native'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import Card from '../components/Card/Card'


const SurveysResultScreeen = () => {
    return (
        <ScrollView>
            <Image source={require('../../Image/results.png')}  style={styles.image}>
            </Image>
             <View >
                <DescriptionText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris et ante iaculis venenatis."></DescriptionText>
            </View>
        

            </ScrollView>
    )
}

export default SurveysResultScreeen;

const styles = StyleSheet.create({
    image: {
    width:'auto',
    height: 250,
    resizeMode: "cover",
    justifyContent: "center",
    },
});