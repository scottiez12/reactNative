import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

//destructuring on this component function... but could be props instead of {navigation}
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.margin}
        title="Tap Here to go to the Components Screen"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />
      {/* <TouchableOpacity
        style={styles.margin}
        onPress={() => {
          props.navigation.navigate("List");
        }}
      >
        <Text>Go To List Screen</Text>
        <Text>Go To List Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  margin: {
    marginTop: 20,
  },
});

export default HomeScreen;
