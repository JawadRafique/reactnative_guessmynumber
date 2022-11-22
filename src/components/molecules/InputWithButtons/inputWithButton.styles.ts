import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../utils/constant';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // width: '100%',
        padding: 20,
    },
    inputHeading: {
        color: ThemeColors.secondary,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        padding: 14,
        marginTop: 25,
        textTransform: "uppercase"
    },
    buttonContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    modalContainer: {
        height: 400,
        backgroundColor: ThemeColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    selectedText: {
        fontSize: 62,
        color: ThemeColors.secondary,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: ThemeColors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
