import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
const HomeScreen = props => {
  return (
    <View>
   <Text style={styles.text}>HomeScreen Master Schedule App</Text>
   <Button 
   onPress = {() => props.navigation.navigate('Items')}
   title= "Enter to Items page"
   />
   </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;

