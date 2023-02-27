import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  
} from "react-native";
import { styles } from "./SignUp.styles";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Criar Conta</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.title}>Nome</Text>
        <TextInput placeholder="chivas" style={styles.input} />

        <Text style={styles.title}>Email</Text>
        <TextInput  placeholder="einf.m1@gmail.com" style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Bt4opSd9" style={styles.input} />

        <Text style={styles.title}>Repetir Senha</Text>
        <TextInput placeholder="Bt4opSd9" style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.registerText}>Já possui uma conta? Entre</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
