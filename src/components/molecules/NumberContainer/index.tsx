import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './numberContainer.styles';

type Props = {
    children: React.ReactNode;
};

const NumberContainer: React.FC<Props> = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

export default NumberContainer;
