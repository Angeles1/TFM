import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import Chart from '../components/Chart/Chart'


const Main = () => {
    
      
    return (
        <ScrollView>
            <View >
                <Image></Image>
                <DescriptionText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris et ante iaculis venenatis."></DescriptionText>
            </View>
            <ScrollView>
                <Chart ></Chart>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffc0eb",
    },
    chart:{
        flex:1,


    }
  });


export default Main;
   
