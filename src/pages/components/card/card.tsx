import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: 50,
    width: 50,
    backgroundColor: "#A09DF7",

  },
  imageContainer: {
    flex: 2
  },
});
