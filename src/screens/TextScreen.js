import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
//TextInput has no styling by default... need to set at least a border to see where its even at on the UI
const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      <Text>Input = {name}</Text>
      {name.length < 5 ? (
        <Text>Name needs to be at least 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default TextScreen;
