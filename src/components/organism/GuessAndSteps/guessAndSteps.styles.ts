import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../utils/constant';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: 'center',
        backgroundColor: ThemeColors.backgroundPrimary,
        flexDirection: "column"
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
