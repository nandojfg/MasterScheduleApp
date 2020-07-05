import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen =({navigation}) => {
  return (
   <Text style={styles.text}>Hello David, Mel and Alida, this is the first step of our app</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;

