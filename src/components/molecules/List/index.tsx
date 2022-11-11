import React from 'react';
import {styles} from './list.styles';
import {FlatList} from 'react-native-gesture-handler';
import ListItem from '../../atoms/ListItem';
import {View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    rounds: number[];
};

const List: React.FC<Props> = ({rounds}) => {
    console.log("rounds",rounds)
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={rounds}
                renderItem={ListItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={false}
            />
        </SafeAreaView>
    );
};

export default List;
