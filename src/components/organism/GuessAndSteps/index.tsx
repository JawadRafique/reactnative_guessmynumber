import {View, Alert, Text} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import CustomHeading from '../../atoms/Heading';
import {styles} from './guessAndSteps.styles';
import NumberContainer from '../../molecules/NumberContainer';
import PrimaryButton from '../../atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import List from '../../molecules/List';
import {AppStackParamList} from '../../../types/navigations';

export type Props = {
    selectedNumber: number;
};

export type gameOverScreenNavigationType = StackNavigationProp<
    AppStackParamList,
    'gameOver'
>;

const generateRandomNumber = (
    min: number,
    max: number,
    exclude: number,
): number => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    console.log("min max", `${min} ${max}`)
    if (randomNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GuessAndSteps: React.FC<Props> = ({selectedNumber}) => {
    const navigation = useNavigation<gameOverScreenNavigationType>();

    // Alternate to this func
    const initialGuess = generateRandomNumber(1, 100, selectedNumber)
    // const initialGuess = useMemo(
    //     () => generateRandomNumber(minBoundary, maxBoundary, selectedNumber),
    //     [selectedNumber],
    // );
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

    useEffect(() => {
        if (selectedNumber === currentGuess) {
            minBoundary= 1;
            maxBoundary = 100;

            navigation.navigate('gameOver', {
                rounds: guessRounds.length,
                selectedNumber: selectedNumber,
            });
        }
        return () => {};
    }, [currentGuess]);

    // direction => "lower" or "higher"
    const nextGuessHandler = (direction: string) => {
        if (
            (direction === 'lower' && currentGuess < selectedNumber) ||
            (direction === 'higher' && currentGuess > selectedNumber)
        )
            return Alert.alert(`Naaahh, it's not ${direction}`);

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRandomNum = generateRandomNumber(
            minBoundary,
            maxBoundary,
            currentGuess,
        );
        setGuessRounds(prevState => [...prevState, newRandomNum]);
        setCurrentGuess(newRandomNum);
    };

    console.log('selectedNumber', selectedNumber);
    return (
        <View style={styles.container}>
            <CustomHeading title="Opponent Guess" />
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
                <PrimaryButton
                    title="Lower"
                    onPress={nextGuessHandler.bind(this, 'lower')}
                />
                <PrimaryButton
                    title="Higher"
                    onPress={nextGuessHandler.bind(this, 'higher')}
                />
            </View>
            {/* {guessRounds.map((item, i) => <Text key={i}>{item}</Text>)} */}
            <List rounds={guessRounds} />
        </View>
    );
};

export default GuessAndSteps;
