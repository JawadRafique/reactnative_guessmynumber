import {View, Text, Modal, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './inputWithButton.styles';
import PrimaryButton from '../../atoms/Button';
import CustomInput from '../../atoms/Input';
import CustomHeading from '../../atoms/Heading';

const InputWithButtons = () => {
    const [inputVal, setInputVal] = useState<string>('');
    const [totalNum, setTotalNum] = useState<number[]>(() =>
        Array.from({length: 100}, (_, idx) => idx),
    );
    const [compSelectedVal, setCompSelectedVal] = useState<number>(-1);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [isValMatched, setIsValMatched] = useState<boolean>(false);

    // useEffect(() => {
    //   if(compSelectedVal === )

    //   return () => {
    //   }
    // }, [compSelectedVal])

    const getRandomVal = (): number => {
        const randomValIndex = Math.floor(Math.random() * totalNum.length);
        const randomVal = totalNum[randomValIndex];
        console.log("getRandomVal")
        console.log("totalNum",totalNum)
        console.log("randomValIndex",randomValIndex)
        console.log("randomVal",randomVal)
        setCompSelectedVal(randomVal);
        return randomVal;
    };

    const checkIfNumberMatched = () => {
        const randomVal = getRandomVal();
        console.log('randomVal', randomVal);
        if (randomVal === Number(inputVal)) {
            setIsValMatched(true);
            Alert.alert('Val Matched');
            return;
        }
        setModalVisible(true);
        console.log("after modal true")
    };

    const removeItems = (type: string) => {
        if(type === "low"){
            const filteredArr = totalNum.filter((item) => item < compSelectedVal)
            console.log("filteredArr",filteredArr)
            setTotalNum((_) => [...filteredArr])
        }else {
            const filteredArr = totalNum.filter((item) => item > compSelectedVal)
            console.log("filteredArr",filteredArr)
            setTotalNum((_) => [...filteredArr])
        }
    }

    const valHighOrLow = (type: string) => {
        if (type == 'low') {
            if (compSelectedVal < Number(inputVal)) {
                Alert.alert("Don't Lie");
                return false;
            }
            removeItems("low")
            setModalVisible(false);
            setTimeout(() => {
                checkIfNumberMatched();
            }, 300);
        } else {
            if (compSelectedVal > Number(inputVal)) {
                Alert.alert("Don't Lie");
                return false;
            }
            removeItems("high")
            setModalVisible(false);
            setTimeout(() => {
                checkIfNumberMatched();
            }, 300);
        }
    };

    const onResetPress = () => {
        setInputVal('');
    };
    const onConfirmPress = () => {
        checkIfNumberMatched();
        console.log('onConfirmPressed');
    };
    return (
        <>
            <View style={styles.container}>
                <CustomHeading title="Guess My Number" />
                <CustomInput inputVal={inputVal} setInputVal={setInputVal} />
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        title="Reset"
                        onPress={onResetPress}
                        disabled={!inputVal ? true : false}
                    />
                    <PrimaryButton
                        title="Confirm"
                        onPress={onConfirmPress}
                        disabled={!inputVal ? true : false}
                    />
                </View>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    visible={modalVisible}
                    transparent
                    animationType="slide"
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.selectedText}>
                                {compSelectedVal}
                            </Text>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton
                                    title="Low"
                                    onPress={() => valHighOrLow('low')}
                                />
                                <PrimaryButton
                                    title="High"
                                    onPress={() => valHighOrLow('high')}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default InputWithButtons;
