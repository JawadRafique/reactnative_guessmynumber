import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../utils/constant";

export const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        backgroundColor: ThemeColors.primary,
        borderRadius: 32,
        paddingHorizontal: 38,
        paddingVertical: 8,
        marginBottom: 8,
        // minWidth: 140
    },
    text: {
        color: ThemeColors.white,
        fontSize: 22,
        textAlign: "center",
        textTransform: "uppercase"
    }
})
