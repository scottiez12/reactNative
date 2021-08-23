import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text>Hello as a variable..</Text>;
  const myName = "Scott";
  return (
    <View>
      <Text style={styles.textStyle}>React Native... wee!</Text>
      {greeting}
      <Text style={styles.subHeaderStyle}>{myName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
  },
  subHeaderStyle: {
    fontSize: 50,
  },
});

export default ComponentsScreen;
