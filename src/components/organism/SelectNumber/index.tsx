import {View, Text, Button, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import InputWithButtons from '../../molecules/InputWithButtons';
import {styles} from './selectNumber.styles';
import CustomHeading from '../../atoms/Heading';
import useOrientation from '../../../hooks/useOrientation';
import { ThemeColors } from '../../../utils/constant';

const GuessMyNumber = () => {
    const {width, height, isPortrait} = useOrientation()
    console.log("width",width)
    console.log("height",height)
    console.log("isPortrait",isPortrait)

    return (
        <View style={[styles.container, { backgroundColor: ThemeColors.backgroundPrimary}]}>
            <CustomHeading title="Guess My Number" />
            <InputWithButtons />
        </View>
    );
};

export default GuessMyNumber;
