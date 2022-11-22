import {View, Text} from 'react-native';
import React from 'react';
import Final from '../../components/organism/Final';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackParamList} from '../../types/navigations';
import useOrientation from '../../hooks/useOrientation';

type informationScreenRouteType = RouteProp<AppStackParamList, 'gameOver'>;

const GameOver = () => {
    const {
        params: {rounds, selectedNumber},
    } = useRoute<informationScreenRouteType>();

    const {width, height} = useOrientation()

    return (
        <View style={{flex: 1, width}}>
            <Final rounds={rounds} selectedNumber={selectedNumber} />
        </View>
    );
};

export default GameOver;
