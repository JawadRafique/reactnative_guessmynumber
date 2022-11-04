import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './button.styles';

export type Props = {
    title: string;
    onPress: ((event: GestureResponderEvent) => void) | null | undefined;
    disabled?: boolean
};

const PrimaryButton: React.FC<Props> = ({title, onPress,disabled}) => {
    return (
        <Pressable onPress={onPress} disabled={disabled}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
};

export default PrimaryButton;
