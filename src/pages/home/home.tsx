import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Banner from "../components/banner/banner";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.message}> Olá, Geovane </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>
      {/* <View style={styles.imageContainer}>
        <Text>Lindo mesmo</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A09DF7",


  },
  title: {
//    flex: 1,
    marginTop: "20%",
      marginBottom: "8%",
    paddingStart: "5%",
 //   borderWidth: 4
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  imageContainer: {
    flex: 2,
  },bannerContainer: {
    flex: 2,
// borderWidth: 1//
  }
});
