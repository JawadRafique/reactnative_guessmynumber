import { ThemeColors } from './../../../utils/constant';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        color: ThemeColors.white,
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        padding: 14,
        borderColor: ThemeColors.white,
        borderWidth: 2,
        maxWidth: 300,
        marginTop: 25
    }
})
