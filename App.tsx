import React from 'react';
import {
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './src/components/atoms/Button';
import CustomHeading from './src/components/atoms/Heading';
import CustomInput from './src/components/atoms/Input';
import Home from './src/screens/Home';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.appContainer}>
            <Home/>
            {/* <CustomHeading title='Guess My Number'/>
            <CustomButton title='Reset' />
            <CustomButton title='Test' />
            <CustomInput /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        maxWidth: "100%",
        maxHeight: "100%",
        backgroundColor: "#FFFFFF",
        // padding: 20
    }
});

export default App;
