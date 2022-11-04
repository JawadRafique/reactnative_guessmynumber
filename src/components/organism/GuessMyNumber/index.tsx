import {View, Text, Button} from 'react-native';
import React, { useState } from 'react';
import InputWithButtons from '../../molecules/InputWithButtons';
import CustomHeading from '../../atoms/Heading';
import { styles } from './guessMyNumber.styles';

const GuessMyNumber = () => {
    const [steps, setSteps] = useState<object[] | []>([])

    return (
        <View style={styles.container}>
            <InputWithButtons />
        </View>
    );
};

export default GuessMyNumber;
