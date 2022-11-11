import { View, Text } from 'react-native'
import React from 'react'
import Final from '../../components/organism/Final'
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppStackParamList } from '../../types/navigations';

type informationScreenRouteType = RouteProp<AppStackParamList, 'gameOver'>;


const GameOver = () => {
    const {
        params: {rounds, selectedNumber},
    } = useRoute<informationScreenRouteType>();
  return (
    <Final rounds={rounds} selectedNumber={selectedNumber}/>
  )
}

export default GameOver