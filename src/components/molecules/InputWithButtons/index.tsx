import {View, Text, Modal, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './inputWithButton.styles';
import PrimaryButton from '../../atoms/Button';
import CustomInput from '../../atoms/Input';
import CustomHeading from '../../atoms/Heading';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../../types/navigations';

export type informationScreenNavigationType = StackNavigationProp<AppStackParamList, "Information">


const InputWithButtons: React.FC = () => {
    const navigation = useNavigation<informationScreenNavigationType>();
    const [inputVal, setInputVal] = useState<string>('');

    const resetInputHandler = () => {
        setInputVal('');
    };
    const confirmInputHandler = () => {
        const selectedNumber = parseInt(inputVal);

        if(isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99){
            Alert.alert('Invalid Number', "Input has to be a number between 1 and 99" , [{text: 'Okay' , style: "destructive", onPress: resetInputHandler}])
        }

        resetInputHandler()
        navigation.navigate(`Information`, {
            selectedNumber: selectedNumber
        })

    };
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.inputHeading}>Select a number</Text>
                <CustomInput inputVal={inputVal} setInputVal={setInputVal} />
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        title="Reset"
                        onPress={resetInputHandler}
                        disabled={!inputVal ? true : false}
                    />
                    <PrimaryButton
                        title="Confirm"
                        onPress={confirmInputHandler}
                        disabled={!inputVal ? true : false}
                    />
                </View>
            </View>
        </>
    );
};

export default InputWithButtons;
