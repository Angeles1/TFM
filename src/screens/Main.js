import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'
import Chart from '../components/Chart/Chart'


const Main = () => {
    let sampleData = [
        {
          seriesName: 'series1',
          data: [
            {x: '2018-02-01', y: 30},
            {x: '2018-02-02', y: 200},
            {x: '2018-02-03', y: 170},
            {x: '2019-02-04', y: 250},
            {x: '2019-03-04', y: 120},
            {x: '2019-03-05', y: 290},

        ],
          color: '#297AB1'
        },
        {
          seriesName: 'series2',
          data: [
            {x: '2018-02-01', y: 20},
            {x: '2018-02-02', y: 100},
            {x: '2018-02-03', y: 140},
            {x: '2019-02-04', y: 550},
            {x: '2019-03-05', y: 30}
        ],
          color: 'green'
        },
        {
            seriesName: 'series3',
            data: [
              {x: '2018-03-01', y: 10},
              {x: '2018-03-02', y: 300},
              {x: '2018-03-03', y: 40},
              {x: '2019-03-04', y: 350},
              {x: '2019-03-04', y: 50},
              {x: '2019-03-05', y: 500},

            ],
            color: 'gray'
          },
          {
            seriesName: 'series4',
            data: [
              {x: '2019-03-01', y: 1},
              {x: '2019-03-02', y: 30},
              {x: '2019-03-03', y: 440},
              {x: '2019-03-04', y: 380},
              {x: '2019-03-04', y: 40},
              {x: '2019-03-05', y: 120},

            ],
            color: 'red'
          },
          {
            seriesName: 'series5',
            data: [
              {x: '2019-03-01', y: 13},
              {x: '2019-03-02', y: 330},
              {x: '2019-03-03', y: 40},
              {x: '2019-03-04', y: 380},
              {x: '2019-03-04', y: 420},
              {x: '2019-03-05', y: 50},

            ],
            color: 'yellow'
          },
      ];

      
    return (
        <ScrollView>
            <View >
                <Image></Image>
                <DescriptionText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris et ante iaculis venenatis."></DescriptionText>
            </View>
            <ScrollView>
                <Chart collectedData= {sampleData}></Chart>
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
   
