import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../utils/constant';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center',
        // maxWidth: 400,
        alignSelf: "center",
        backgroundColor: ThemeColors.backgroundPrimary,
    },
    imageContainer: {
        marginTop: 30,
        borderWidth: 3,
        borderColor: ThemeColors.primary,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: ThemeColors.lightBlue,
        fontWeight: 'bold',
    },
    outerText: {
        color: ThemeColors.white,
        marginTop: 12,
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 12,
    },
});
