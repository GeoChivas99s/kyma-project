import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Iprops {
name : string 

}

export default function App ( { name = " Geossssss" } :  Iprops ) {
  return (
    <View style={styles.container}>
      <Text>Lindo mesmo!{name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
