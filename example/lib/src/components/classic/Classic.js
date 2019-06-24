import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles, {
  imageStyle,
  titleStyle,
  titleTextStyle,
  contextStyle
} from "./Classic.style";

const defaultImage = require("../../../../assets/trial.png");

const Classic = props => {
  const {
    image,
    title,
    context,
    titleColor,
    imageWidth,
    imageHeight,
    titleTextColor,
    contextTextColor
  } = props;
  return (
    <View style={styles.container}>
      <FastImage source={image} style={imageStyle(imageHeight, imageWidth)} />
      <View style={styles.containerGlue}>
        <View style={titleStyle(titleColor)}>
          <Text numberOfLines={1} style={titleTextStyle(titleTextColor)}>
            {title}
          </Text>
        </View>
        <Text numberOfLines={2} style={contextStyle(contextTextColor)}>
          {context}
        </Text>
      </View>
    </View>
  );
};

Classic.propTypes = {
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  titleColor: PropTypes.string,
  titleTextColor: PropTypes.string,
  title: PropTypes.string,
  contextTextColor: PropTypes.string,
  context: PropTypes.string
};

Classic.defaultProps = {
  image: defaultImage,
  imageHeight: 95,
  imageWidth: 95,
  titleTextColor: "white",
  contextTextColor: "#828b9a",
  context: "Yavaş ve dikkatli sürünüz !",
  titleColor: "rgba(251, 130, 107, 1.0)",
  title: "Trafik kazasına yaklaşıyorsunuz"
};

export default Classic;
