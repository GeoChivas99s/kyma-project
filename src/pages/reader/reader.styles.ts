import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#8381ca",
    },
    containerHeader: {
      marginTop: "14%",
      marginBottom:"8%",
      paddingStart: "5%"
    },message:{
     fontSize:28,
     fontWeight:'bold',
     color: '#fff'
    },
    containerForm: {
      backgroundColor:"#fff", 
      flex:1 ,
      borderTopLeftRadius:25 ,
      borderTopRightRadius: 25 ,
      paddingStart: "5%", 
      paddingEnd: "5%"
    },
    title: {
      fontSize: 20, 
      marginTop: 28
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "#8381ca",
      height: 40 , 
      marginBottom: 12 , 
      fontSize: 16
    },
    buttonText: {
      color:"#fff", 
      fontSize:18,
      fontWeight: 'bold'
    },
    button: {
      backgroundColor: "#8381ca",
      width: "100%" , 
      borderRadius: 4 , 
      paddingVertical: 8, 
      marginTop: 14 ,
      justifyContent: "center", 
      alignItems: "center", 
     
    },
    registerText: {
      color:"#a1a1a1"
    },
    buttonRegister: {
      marginTop: 14 ,
      alignSelf: 'center'
    },
  });
  