import { ThemeColors } from './../../../utils/constant';
import { StyleSheet } from "react-native";
import { vw } from '../../../utils/units';

export const styles = StyleSheet.create({
    text: {
        color: ThemeColors.white,
        textAlign: "center",
        fontSize: 28,
        fontFamily: "OpenSans-Bold",
        // fontWeight: "bold",
        padding: 14,
        borderColor: ThemeColors.white,
        borderWidth: 2,
        // maxWidth: 300,
        maxWidth: vw * 120,
        marginTop: 25
    }
})
