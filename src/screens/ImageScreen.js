import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/5472.jpg")}
        imageScore={5}
      />

      <ImageDetail
        title="Ocean"
        imageSource={require("../../assets/1c9ab248-0c9c-413d-b0c8-ce8aec56b821.jpg")}
        imageScore={8}
      />

      <ImageDetail
        title="Dog"
        imageSource={require("../../assets/60a416ad46fa28bf060cfe840be1fe72.jpg")}
        imageScore={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
