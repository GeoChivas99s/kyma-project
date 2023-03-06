import React from "react";

import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../components/banner/banner";
import MicroCard from "../components/microCard/microCard";
import FuncCard from "../components/funcCard/funcCard";
import * as Speech from "expo-speech";
import { useNavigation } from "@react-navigation/native";
export default function Home() {

  const navigate = useNavigation();
  type Iprops = {
    name: string;
    icon: string;
    key: number;
  };

  const data: Iprops[] = [
    {
      name: "home",
      icon: "home",
      key: 1,
    },
    {
      name: "home",
      icon: "home",
      key: 2,
    },
    {
      name: "home",
      icon: "home",
      key: 3,
    },
    {
      name: "home",
      icon: "home",
      key: 4,
    },
    {
      name: "home",
      icon: "home",
      key: 5,
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.title}>
        <Text style={styles.message}> Olá, Geovane </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>
      {/* <ScrollView
        style={styles.bannerContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {data.map((item: Iprops) => {
          return <MicroCard key={item.key} name={item.name} icon={item.icon} />;
        })}
      </ScrollView> */}
      <View style={styles.cardsWrapper}>
        <FuncCard name="Leitura Assistida" icon="book" onClick={()=>navigate.navigate("Reader")}/>
        <FuncCard name="Gerador de texto" icon="text" onClick={()=>navigate.navigate("TextGenerator")}    />
        <FuncCard name="Efeito playback atrasado"   icon="mic"   onClick={()=>navigate.navigate("AudioRecorder")}/>
        <FuncCard name="Alguns exercícios" icon="information-circle" />
      </View>

      {/* <ScrollView
        style={styles.bannerContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {data.map((item: Iprops) => {
          return <MicroCard key={item.key} name={item.name} icon={item.icon} />;
        })}
      </ScrollView> */}
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
    // marginBottom:90
  },
  cardsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 10,
    flexWrap: "wrap",
    marginBottom: 150,
  },
});
