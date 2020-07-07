import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen =({navigation}) => {
  return (
   <Text style={styles.text}>hello</Text>
   <Text style={styles.text}>basically done</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;

