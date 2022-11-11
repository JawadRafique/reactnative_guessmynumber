import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../utils/constant";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: ThemeColors.white,
        // backgroundColor: ThemeColors.white,
        padding: 20,
        marginTop: 40,
        borderRadius: 12,
        width: "80%" 
    },
    text: {
        color: ThemeColors.secondary,
        fontSize: 42,
        textTransform: "uppercase",
    }
})
