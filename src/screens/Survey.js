import React from 'react'
import { View, Text} from 'react-native'
import Image from '../../src/components/Image/Image'
import DescriptionText from '../components/DescriptionText/DescriptionText'


const Survey = () => {
    return (
        <View>
             <View >
                <Image></Image>
                <DescriptionText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris et ante iaculis venenatis."></DescriptionText>
            </View>
          
        </View>
    )
}

export default Survey;