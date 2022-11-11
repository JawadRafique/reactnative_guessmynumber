import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../utils/constant";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: ThemeColors.lightBlue,
        padding: 16,
        marginTop: 7,
        marginBottom: 7,
        borderRadius: 12,
    },
    text: {
        color: ThemeColors.white,
        fontSize: 22,
        textTransform: "uppercase"
    }
})
