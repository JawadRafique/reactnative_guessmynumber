import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../utils/constant";

export const styles = StyleSheet.create({
    input: {
        color: ThemeColors.secondary,
        borderBottomColor: ThemeColors.secondary,
        borderWidth: 1,
        marginVertical: 8,
        fontFamily: "OpenSans-Bold",
        fontSize: 32,
        width: 50,
        borderLeftColor: ThemeColors.backgroundPrimary,
        borderRightColor: ThemeColors.backgroundPrimary,
        borderTopColor: ThemeColors.backgroundPrimary
    },
})
