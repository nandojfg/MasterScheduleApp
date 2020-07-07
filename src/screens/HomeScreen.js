import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen =({navigation}) => {
  return (
   <Text style={styles.text}>hello, another change</Text>
   <Text style={styles.text}>sup Alida, this is the first step of our app!</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;

