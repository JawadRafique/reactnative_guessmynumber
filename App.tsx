import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    StatusBar,
    useWindowDimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigations';
import { ThemeColors } from './src/utils/constant';
import { vh, vw } from './src/utils/units';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <>
            {/* // SafeAreaView => is for adding space on top for notches and avoid content collapse */}
            <SafeAreaView style={styles.appContainer}>
                <StatusBar barStyle="light-content" />
                <Navigation />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    
});

export default App;
