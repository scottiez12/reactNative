import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    // <View>
    //   <View style={styles.viewStyle}>
    //     <Text style={styles.textStyleOne}>Child1</Text>
    //     <Text style={styles.textStyleTwo}>Child2 </Text>
    //   </View>
    //   <View style={styles.viewStyle}>
    //     <Text style={styles.textStyleThree}>Child3</Text>
    //   </View>
    // </View>
    <View style={styles.parentViewStyle}>
      <View style={styles.viewStyle1}></View>
      <View style={styles.viewStyle2}></View>
      <View style={styles.viewStyle3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  viewStyle1: {
    backgroundColor: "blue",
    height: 40,
    width: 40,
  },
  viewStyle2: {
    backgroundColor: "green",
    height: 40,
    width: 40,
    top: 40,
  },
  viewStyle3: {
    backgroundColor: "orange",
    height: 40,
    width: 40,
  },
  textStyleOne: {
    borderWidth: 3,
    borderColor: "green",
    position: "absolute",
  },
  textStyleTwo: {
    borderWidth: 3,
    borderColor: "green",
    alignSelf: "center",
  },
  textStyleThree: {
    borderWidth: 3,
    borderColor: "green",
  },
});

export default BoxScreen;
