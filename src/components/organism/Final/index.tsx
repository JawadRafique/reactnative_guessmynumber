import {View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './final.styles';
import CustomHeading from '../../atoms/Heading';
import PrimaryButton from '../../atoms/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../../types/navigations';
import { useNavigation } from '@react-navigation/native';

export type Props = {
  rounds: number,
  selectedNumber: number;
};

export type homeScreenNavigationType = StackNavigationProp<AppStackParamList, "Home">


const Final: React.FC<Props> = ({rounds,selectedNumber}) => {
  const navigation = useNavigation<homeScreenNavigationType>();

  const onStartNewGame = () => {
    navigation.navigate("Home")
  }
    return (
        <View style={styles.container}>
            <CustomHeading title="Game Over" />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/success.png')} />
            </View>
            <Text style={styles.outerText}>Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{selectedNumber}</Text>.</Text>
            <PrimaryButton title='Start New Game' onPress={onStartNewGame}/>
        </View>
    );
};

export default Final;
