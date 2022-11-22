import {View, Alert, Text, useWindowDimensions} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import CustomHeading from '../../atoms/Heading';
import {styles} from './guessAndSteps.styles';
import NumberContainer from '../../molecules/NumberContainer';
import PrimaryButton from '../../atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import List from '../../molecules/List';
import {AppStackParamList} from '../../../types/navigations';
import useOrientation from '../../../hooks/useOrientation';

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
    if (randomNum === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GuessAndSteps: React.FC<Props> = ({selectedNumber}) => {
    const {width, height, isPortrait} = useOrientation();

    const navigation = useNavigation<gameOverScreenNavigationType>();

    // Alternate to this func
    const initialGuess = generateRandomNumber(1, 100, selectedNumber);
    // const initialGuess = useMemo(
    //     () => generateRandomNumber(minBoundary, maxBoundary, selectedNumber),
    //     [selectedNumber],
    // );
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

    useEffect(() => {
        if (selectedNumber === currentGuess) {
            minBoundary = 1;
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

    // const fillWidth = width <380 ? "100%": "60%"
    const direction = isPortrait ? 'column' : 'row-reverse';
    const childWidth = width > 640 ? width / 2 : width;

    return (
        <View
            style={[
                styles.container,
                {
                    maxWidth: width,
                    overflow: 'hidden',
                    flexDirection: direction,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                },
            ]}>
            <View style={{width: childWidth, alignItems: 'center'}}>
                <CustomHeading title="Opponent Guess" />
                <NumberContainer>{currentGuess}</NumberContainer>
                <View
                    style={[
                        styles.buttonContainer,
                        {flexDirection: isPortrait ? 'row': "column"},
                    ]}>
                    <PrimaryButton
                        title="Lower"
                        onPress={nextGuessHandler.bind(this, 'lower')}
                    />
                    <PrimaryButton
                        title="Higher"
                        onPress={nextGuessHandler.bind(this, 'higher')}
                    />
                </View>
            </View>
            <View style={{width: childWidth, alignItems: 'center'}}>
                <List rounds={guessRounds} />
            </View>
        </View>
    );
};

export default GuessAndSteps;
