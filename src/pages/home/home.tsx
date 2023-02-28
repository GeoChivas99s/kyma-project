import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../components/banner/banner";
import MicroCard from "../components/microCard/microCard";
export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.message}> Olá, Geovane </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>
      <ScrollView style={styles.bannerContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
    
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      <MicroCard name="Home" icon="home"/>
      </ScrollView>
      {/* <View style={styles.imageContainer}>
        <Text>Lindo mesmo</Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8381ca",


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
