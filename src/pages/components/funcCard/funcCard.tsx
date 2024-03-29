import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";
interface Iprops {
  name: string;
  icon: string;
  onClick: () => void;
}
export default function FuncCard({ name, icon, onClick }: Iprops) {
  return (
    <View style={styles.container} onTouchEndCapture={onClick}>
      <View>
        <Icon name={icon} size={50} color={"#4E4E4E"} />
      </View>
      <Text style={styles.description}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //   borderWidth: 2,
    marginTop: 50,
    marginLeft: 20,
    padding: 20,
    height: 150,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#4E4E4E",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    textAlign: "center",
    shadowOffset: {
      width: 20,
      height: 30,
    },
  },
});
