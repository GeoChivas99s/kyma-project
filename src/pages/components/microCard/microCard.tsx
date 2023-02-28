import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
interface Iprops {
  name: string;
  icon: string;
}
export default function MicroCard({ name, icon }: Iprops) {
  return (
    <View style={styles.container}>
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
    height: 100,
    width: 100,
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
    shadowOffset: {
      width: 20,
      height: 30,
    },
  },
});
