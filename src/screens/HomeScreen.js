import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


<<<<<<< HEAD
const HomeScreen = props => {
  return (
    <View>
   <Text style={styles.text}>Hello David, Mel and Alida, this is the first step of our app!</Text>
   <Button 
   onPress = {() => props.navigation.navigate('UserLogin')}
   title= "Enter to welcome page"
   />
=======
const HomeScreen =({navigation}) => {
  return ( <View>
   <Text style={styles.text}> Mel changes Alida, this is the first step of our app!</Text>
   <Text style={styles.text}>Holaaaa</Text>
>>>>>>> 21855d06c5e9769b7e352dc9756bec76b0295028
   </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;

