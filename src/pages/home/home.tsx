import React from "react";

import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import Banner from "../components/banner/banner";
import MicroCard from "../components/microCard/microCard";
import FuncCard from "../components/funcCard/funcCard";
import * as Speech from 'expo-speech';

export default function Home() {
  type Iprops = {
    name: string;
    icon: string;
    key: number;
  };
  const speak = () => {
    const thingToSay = "Durante o ano fiscal (6 de abril de 2022 - 5 de abril de 2023), você estará nos Estados Unidos da América por 183 dias ou mais?";
    Speech.speak(thingToSay,{
      language: "pt-BR", 
      pitch:1,
      rate:1
    });
  };
  const data: Iprops[] = [
    {
      name: "home",
      icon: "home",
      key: 1
    },
    {
      name: "home",
      icon: "home",
      key: 2
    },
    {
      name: "home",
      icon: "home",
      key: 3
    },
    {
      name: "home",
      icon: "home",
      key: 4
    },
    {
      name: "home",
      icon: "home",
      key: 5
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.title}>
        <Text style={styles.message}> Olá, Geovane </Text>
        <Button title="Press to hear some words" onPress={speak} />
      </View>
      <View style={styles.bannerContainer}>
        <Banner />
      </View>
      <ScrollView
        style={styles.bannerContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {data.map((item: Iprops) => {
          return <MicroCard key={item.key}  name={item.name} icon={item.icon} />;
        })}
      </ScrollView>
      <View style={styles.cardsWrapper}>
        <FuncCard name="Leitura Assistida" icon="book" />
        <FuncCard name="Gerador de texto" icon="text" />
        <FuncCard name="Efeito playback atrasado" icon="mic" />
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
    marginBottom:150
  },
});
