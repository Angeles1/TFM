import React from 'react'
import { Text, StyleSheet, View} from 'react-native'
import PureChart from 'react-native-pure-chart';


const Chart = () => {


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
      ];


    return (
        <View style={styles.chartcontainer}>
            <PureChart data={sampleData} type='line'
                width={'90%'}
                height={200}
                backgroundColor={'none'}

               // customValueRenderer={(index, point) => {
               //     if (index % 2 === 0) return null
               //     return (
               //       <Text style={{textAlign: 'center'}}>{point.y}</Text>
               //     )
               // }}
            />  
        </View>
       
    )
}
const styles = StyleSheet.create({
    chartcontainer: {
        alignItems: 'center'
    },
  
  });

export default Chart;