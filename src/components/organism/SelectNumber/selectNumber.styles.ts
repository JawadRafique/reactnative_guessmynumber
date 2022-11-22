import { ThemeColors } from './../../../utils/constant';
import {StyleSheet} from 'react-native';
import { vh, vw } from '../../../utils/units';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 400,
        alignSelf: "center",
        // backgroundColor: ThemeColors.backgroundPrimary
        // width: 100 * vw,
        // height: 100 * vh
    },
});
