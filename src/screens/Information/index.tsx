import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import GuessAndSteps from '../../components/organism/GuessAndSteps';
import {AppStackParamList} from '../../types/navigations';

type informationScreenRouteType = RouteProp<AppStackParamList, 'Information'>;

function Information() {
    const {
        params: {selectedNumber},
    } = useRoute<informationScreenRouteType>();
    return <GuessAndSteps selectedNumber={selectedNumber} />;
}

export default Information;
