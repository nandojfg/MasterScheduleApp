import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';


const HomeScreen =({navigation}) => {
  return (
    <View>
   <Text style={styles.text}>This is the home page</Text>

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

