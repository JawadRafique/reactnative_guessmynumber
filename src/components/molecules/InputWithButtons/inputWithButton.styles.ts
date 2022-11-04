import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#003459",
        padding: 20
    },
    buttonContainer: {
        width: "100%", 
        flexDirection: "row",
        justifyContent: "space-around"
    },
    modalWrapper: {
        flex:1, 
        // backgroundColor: "#c9b9b9",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    modalContainer: {
        height: 400,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12
    },
    selectedText: {
        fontSize: 62,
        color: "#ddb52f"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // backgroundColor: "#000"
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      }
})
