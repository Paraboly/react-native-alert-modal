import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles, { imageStyle, contextStyle } from "./Classic.style";
import RoundedTitle from "../shared/RoundedTitle/RoundedTitle";

const defaultImage = require("../../../../assets/trial.png");

const Classic = props => {
  const {
    image,
    title,
    context,
    titleColor,
    fontFamily,
    imageWidth,
    imageHeight,
    titleTextColor,
    titleFontFamily,
    contextTextColor
  } = props;
  return (
    <View style={styles.container}>
      <FastImage source={image} style={imageStyle(imageHeight, imageWidth)} />
      <View style={styles.containerGlue}>
        <RoundedTitle
          title={title}
          titleColor={titleColor}
          titleTextColor={titleTextColor}
          fontFamily={titleFontFamily}
        />
        <Text
          numberOfLines={2}
          style={contextStyle(contextTextColor, fontFamily)}
        >
          {context}
        </Text>
      </View>
    </View>
  );
};

Classic.propTypes = {
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  contextTextColor: PropTypes.string,
  context: PropTypes.string
};

Classic.defaultProps = {
  image: defaultImage,
  imageHeight: 95,
  imageWidth: 95,
  contextTextColor: "#828b9a",
  context: "Yavaş ve dikkatli sürünüz !"
};

export default Classic;
