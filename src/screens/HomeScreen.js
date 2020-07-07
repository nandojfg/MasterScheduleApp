import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen =({navigation}) => {
  return (
   <Text style={styles.text}> Mel changes Alida, this is the first step of our app!</Text>
   <Text style={styles.text}>hello, another change</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;

