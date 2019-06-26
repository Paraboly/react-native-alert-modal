import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles, { imageStyle, contextStyle } from "./Classic.style";
import RoundedTitle from "../shared/RoundedTitle/RoundedTitle";

const defaultImage = require("../../../assets/trial.png");

const Classic = props => {
  const {
    icon,
    title,
    context,
    titleColor,
    fontFamily,
    iconWidth,
    iconHeight,
    iconComponent,
    titleTextColor,
    titleFontFamily,
    contextTextColor
  } = props;
  return (
    <View style={styles.container}>
      {iconComponent || (
        <FastImage source={icon} style={imageStyle(iconHeight, iconWidth)} />
      )}
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
  context: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  contextTextColor: PropTypes.string
};

Classic.defaultProps = {
  icon: defaultImage,
  iconWidth: 95,
  iconHeight: 95,
  contextTextColor: "#828b9a",
  context: "Yavaş ve dikkatli sürünüz !"
};

export default Classic;
