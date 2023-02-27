import React from "react";
import { styles } from "./Welcome.style";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/logo.png")}
          style={{ width: "80%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        style={styles.containerForm}
        delay={600}
        animation="fadeInUp"
      >
        <Text style={styles.title}>
          A nossa missão é ajudar você a superar a gagueira e melhorar a sua
          qualidade de vida.
        </Text>
        {/* <Text style={styles.text}>Faça o login pra começar</Text> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
