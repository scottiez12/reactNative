import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Something0", age: 10 },
    { name: "Something1", age: 12 },
    { name: "Something2", age: 21 },
    { name: "Something3", age: 14 },
    { name: "Something4", age: 16 },
    { name: "Something5", age: 61 },
    { name: "Something6", age: 51 },
    { name: "Something7", age: 41 },
    { name: "Something8", age: 22 },
  ];

  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} -- Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyles: {},
  textStyle: {
    marginVertical: 50,
    marginLeft: 10,
  },
});

export default ListScreen;
