import React from 'react'
import { View, Text} from 'react-native'
import Image from '../Image/Image'
import DescriptionText from '../DescriptionText/DescriptionText'
import Onboarding from 'react-native-onboarding-swiper';


const OnBoardingScreen = () => {
    return (
        <Onboarding
            pages={[
                {
                backgroundColor: '#fff',
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}

export default OnBoardingScreen;