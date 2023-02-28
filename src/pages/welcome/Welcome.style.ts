import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#8381ca",
    },
    containerLogo: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#8381ca",
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
      backgroundColor: "#8381ca",
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
  