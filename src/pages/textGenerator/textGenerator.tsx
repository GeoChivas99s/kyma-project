import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "./textGenerator.styles";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import * as Speech from "expo-speech";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

export default function TextGenerator() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [textInput, setTextInput] = useState("");
  const PROMPT =
    "Gere um texto em Português para praticar a leitura e garanta que o novo texto não é o mesmo gerado anteriomente";
  const generateText = async (prompt: string) => {
    setLoading(true);
    stopSpeak();
    try {
      const data = await axios.post("http://192.168.0.100:5000/api/chatGpt", {
        prompt: PROMPT,
      });
      setText(data.data);
      setLoading(false);
    } catch (ee) {
      console.log(ee);
    }
  };

  useEffect(() => {
    Alert.alert(
      "Aqui consegues adicionar palavras que tenhas dificuladade em pronunciar"
    );
    stopSpeak();
  }, []);

  const handleSubmit = () => {
    if (textInput === "") {
      Alert.alert("Escreva uma palavra");
    }
    generateText("d");
  };

  const speak = () => {
    stopSpeak();
    Speech.speak(text, {
      language: "pt-PT",
      pitch: 1,
      rate: 0.7,
    });
  };
  const stopSpeak = () => {
    Speech.stop();
  };
  const pauseAndResumeSpeak = async () => {
    const isSpeaking = await Speech.isSpeakingAsync();
    isSpeaking ? Speech.pause() : Speech.resume();
  };

  const resumeSpeak = () => {
    Speech.resume();
  };

  const isSpeaking = async () => {
    return await Speech.isSpeakingAsync();
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
        <Text style={styles.message}>Gerador de Textos</Text>

        <View>
          <Text></Text>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            onChangeText={(text) => setTextInput(text)}
            placeholder="Adicione uma palavra que tenha dificuldade em pronunciar"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>
              <Icon name="play" size={40} />
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={generateText}
          >
            <Text style={styles.buttonText}>
              <Icon name="reload-circle" size={40} />
            </Text>
          </TouchableOpacity> */}
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
