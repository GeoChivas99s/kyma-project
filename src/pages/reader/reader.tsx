import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./reader.styles";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import * as Speech from "expo-speech";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
export default function Reader() {
  const teste =
    "Mas as armas e as letras juntamente, Que de África o governo sustentavam, Não bastando a vencer o forte vento, Com que os mares do sul se levantavam, Ainda por cima afrontavam, contento, O furor dos que à morte se entregavam; Que nem por isso viam diminuída A raiva com que a morte recebida";

  useEffect(() => {
    (async function () {
      try {
        const data = await axios.post("http://192.168.0.100:5000/api/chatGpt", {
          prompt: "Crie uma frase com o meu nome Geovane Lindo",
        });
        console.log("sdsdsd", data.data);
      } catch (ee) {
        console.log(ee);
      }
    })();
  }, []);

  const [text, setText] = useState(teste);
  const speak = () => {
    const thingToSay =
      "Durante o ano fiscal (6 de abril de 2022 - 5 de abril de 2023), você estará nos Estados Unidos da América por 183 dias ou mais?";
    Speech.speak(text, {
      language: "pt-BR",
      pitch: 1,
      rate: 1,
    });
  };

  type textProps = {
    id: number;
    value: string;
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Leitura Assistida</Text>
        <View>
          <Text></Text>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.button} onPress={speak}>
            <Text style={styles.buttonText}>
              <Icon name="play" size={40} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              <Icon name="reload-circle" size={40} />
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ width: "100%", padding: 5, height: "100%", marginTop: 30 }}
        >
          <Text style={{ textAlign: "justify", fontSize: 20 }}>{teste}</Text>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}
