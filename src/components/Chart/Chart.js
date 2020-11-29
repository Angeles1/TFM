import React from 'react'
import { Text, StyleSheet, View} from 'react-native'
import PureChart from 'react-native-pure-chart';


const Chart = (props) => {
    return (
        <View style={styles.chartcontainer}>
            <PureChart data={props.collectedData} type='line'
                width={'90%'}
                height={200}
                backgroundColor={'none'}

            //    customValueRenderer={(index, point) => {
            //        if (index % 2 === 0) return null
            //        return (
            //          <Text style={{textAlign: 'center'}}>{point.y}</Text>
            //        )
            //    }}
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