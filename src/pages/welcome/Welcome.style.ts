import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#A09DF7",
    },
    containerLogo: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#A09DF7",
    },
    containerForm: {
      flex: 1,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%",
    },
    title: {
      fontSize: 22,
      marginTop: 35,
      marginBottom: 12,
      textAlign:"left"
    },
    text: {
      color: "#a1a1a1",
    },
    button: {
      position: "absolute",
      backgroundColor: "#A09DF7",
      borderRadius: 15,
      paddingVertical: 8,
      width: "60%",
      alignSelf: "center",
      bottom: "25%",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 24,
      color: "#fff",
      fontWeight: "bold",
    },
  });
  