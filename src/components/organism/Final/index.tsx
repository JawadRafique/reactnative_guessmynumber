import {View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './final.styles';
import CustomHeading from '../../atoms/Heading';
import PrimaryButton from '../../atoms/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../../types/navigations';
import {useNavigation} from '@react-navigation/native';
import useOrientation from '../../../hooks/useOrientation';

export type Props = {
    rounds: number;
    selectedNumber: number;
};

export type homeScreenNavigationType = StackNavigationProp<
    AppStackParamList,
    'Home'
>;

const Final: React.FC<Props> = ({rounds, selectedNumber}) => {
    const navigation = useNavigation<homeScreenNavigationType>();
    const {width, height, isPortrait} = useOrientation();
    const onStartNewGame = () => {
        navigation.navigate('Home');
    };
    const direction = isPortrait ? 'column' : 'row';
    const childWidth = width > 640 ? width / 3 : width;

    const imageContainer = {
        width: isPortrait ? 300 : 200,
        height: isPortrait ? 300 : 200,
        borderRadius: isPortrait ? 150 : 100
    }

    return (
        <View style={[styles.container, {width, flexDirection: direction, justifyContent: "space-around"}]}>
            <View style={{width: childWidth, alignItems: 'center'}}>
                <CustomHeading title="Game Over" />
                <View
                    style={[
                        styles.imageContainer,
                        imageContainer,
                    ]}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/success.png')}
                    />
                </View>
            </View>
            <View
                style={{width: childWidth, alignItems: 'center'}}>
                <Text style={styles.outerText}>
                    Your phone needed{' '}
                    <Text style={styles.highlight}>{rounds}</Text> rounds to
                    guess the number{' '}
                    <Text style={styles.highlight}>{selectedNumber}</Text>.
                </Text>
                <PrimaryButton
                    title="Start New Game"
                    onPress={onStartNewGame}
                />
            </View>
        </View>
    );
};

export default Final;
