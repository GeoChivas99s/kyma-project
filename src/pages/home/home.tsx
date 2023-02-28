import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../components/banner/banner";
import MicroCard from "../components/microCard/microCard";
import FuncCard from "../components/funcCard/funcCard";
export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.message}> Olá, Geovane </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>
     
      <View style={styles.cardsWrapper}>
        <FuncCard name="Leitura Assistida" icon="book" />
        <FuncCard name="Gerador de texto" icon="text" />
        <FuncCard name="Gravador de aúdio" icon="mic" />
        <FuncCard name="Alguns Tratamentos" icon="information-circle" />
      </View>
      <ScrollView
        style={styles.bannerContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
      </ScrollView>
      <ScrollView
        style={styles.bannerContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
        <MicroCard name="Home" icon="home" />
      </ScrollView>
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
  },
  bannerContainer: {
    flex: 2,
    // borderWidth: 1//
  },
  cardsWrapper: {
 flexDirection:"row",
 justifyContent:"space-between",
 paddingEnd:10,
 flexWrap:"wrap"
  },
});
