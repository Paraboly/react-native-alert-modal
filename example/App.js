import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import AlertModal from "./lib/src/AlertModal";

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/map.png")}
        style={styles.container}
      >
        <AlertModal />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#999"
  }
});
