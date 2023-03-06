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
      borderWidth: 1,
      borderColor: "#8381ca",
      height: 58 , 
      borderBottomLeftRadius:10,
      borderTopLeftRadius:10, 
      padding: 20,
     // marginBottom: 12 , 
      fontSize: 16, 
      width:"80%",
      
      // marginTop:80
    },
    buttonText: {
      color:"#fff", 
      fontSize:18,
      fontWeight: 'bold'
    },
    button: {
      backgroundColor: "#8381ca",
      width: "20%" , 
      borderRadius: 10 , 
      borderBottomLeftRadius:0,
      borderTopLeftRadius:0,
      paddingVertical: 8, 
   //   marginTop: 14 ,
      justifyContent: "center", 
      alignItems: "center", 
     
    },
    registerText: {
      color:"#a1a1a1"
    },
    createAudioButton:{
      width: 200  ,
      height:200 , 
      borderWidth:1 ,
      borderRadius:100 ,
      borderColor:"#fff",
      textAlign:"center", 
      justifyContent:"center",
      alignItems:"center", 
      backgroundColor:"#8381ca"
    }

  });
  