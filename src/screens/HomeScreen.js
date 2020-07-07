import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = props => {
  return (
    <View>
   <Text style={styles.text}>Hello David, Mel and Alida, this is the first step of our app!</Text>
   <Button 
   onPress = {() => props.navigation.navigate('UserLogin')}
   title= "Enter to welcome page"
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

