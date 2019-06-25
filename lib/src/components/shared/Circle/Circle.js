import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles, { circleStyle } from "./Circle.style";

const Circle = props => {
  const { value, circleSize, circleColor } = props;
  return (
    <View style={styles.circleContainerStyle}>
      <View style={[styles.center, circleStyle(circleSize, circleColor)]}>
        <Text style={[styles.center, styles.speedTextStyle]}>{value}</Text>
      </View>
    </View>
  );
};

Circle.propTypes = {
  circleSize: PropTypes.number,
  circleColor: PropTypes.string
};

Circle.defaultProps = {
  circleSize: 55,
  circleColor: "#bf747d"
};

export default Circle;
