import React, { Component } from "react";
import { getStatusBarHeight } from "./helpers/helpers";
import { StyleSheet, ImageBackground } from "react-native";
import AlertModal from "@paraboly/react-native-alert-modal";

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/map.png")}
        style={styles.container}
      >
        <AlertModal
          type="classicTripleWithIcon"
          height={getStatusBarHeight() + 600}
        />
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
