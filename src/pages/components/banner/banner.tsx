import React from "react";
import { StyleSheet, Text } from "react-native";
import { View, Image } from "react-native";

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../../assets/logo.png")}
          resizeMode={"contain"}
          style={{ width: "100%" }}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={ styles.title}> Bem-vindo ao Kyma</Text>
        <Text style={ styles.subTitle}>O parceiro ideal para a sua fala</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 //   borderWidth: 1,
    height: 140,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 30,
    width: "95%",
    alignSelf:"center", 
    borderRadius: 30, 
    backgroundColor: "#fff", 
    shadowColor: "#000",
    shadowOpacity: 0.06,
    borderColor: "#fff",
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  imageWrapper: {
   // borderWidth: 2,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textWrapper: {
    flex: 3,
    paddingBottom: 50,
   paddingTop: 40,
    height: "100%", 
    justifyContent: "space-between"
  }, 
  title: {
   color: "#A09DF7",
   fontWeight:"bold", 
   fontSize: 20
  },subTitle: {
    fontSize: 18, 
    flexWrap:"wrap"
  }
});
