import {View, Text, Button} from 'react-native';
import React, { useState } from 'react';
import InputWithButtons from '../../molecules/InputWithButtons';
import { styles } from './selectNumber.styles';
import CustomHeading from '../../atoms/Heading';

const GuessMyNumber = () => {
    return (
        <View style={styles.container}>
            <CustomHeading title="Guess My Number" />
            <InputWithButtons />
        </View>
    );
};

export default GuessMyNumber;
