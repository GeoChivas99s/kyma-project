import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { styles } from "./reader.styles";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import * as Speech from "expo-speech";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
export default function Reader() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const data = await axios.post("http://192.168.0.100:5000/api/chatGpt", {
          prompt: "Crie um texto  com o meu nome",
        });
        setText(data.data);
        setLoading(false);
      } catch (ee) {
        console.log(ee);
      }
    })();
  }, []);

  const speak = () => {
    Speech.speak(text, {
      language: "pt-BR",
      pitch: 1,
      rate: 0.7,
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
          {loading ? (
            <ActivityIndicator size={"large"} />
          ) : (
            <Text style={{ textAlign: "justify", fontSize: 20 }}>{text}</Text>
          )}
        </ScrollView>
      </Animatable.View>
    </View>
  );
}
