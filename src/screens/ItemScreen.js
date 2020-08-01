import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const ItemScreen =({navigation}) => {
  return (
    <View>
   <Text style={styles.text}>This is the Item page</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default ItemScreen;

