import React, { useState } from "react";
import { Button, View, Text, StyleSheet, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          //item === 'rgb(x,x,x)'
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = new StyleSheet.create({});

export default ColorScreen;
