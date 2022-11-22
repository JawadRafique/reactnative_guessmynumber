import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Information from '../screens/Information';
import {RootStackParamList } from '../types/navigations';
import { ThemeColors } from '../utils/constant';
import GameOver from '../screens/GameOver';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator defaultScreenOptions={{}} initialRouteName='Home' screenOptions={{header: () => null}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="gameOver" component={GameOver} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
