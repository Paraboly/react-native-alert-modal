import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles, { imageStyle, textStyle } from "./ClassicWIthIcon.style";

const defaultImage = require("../../../trial.png");

const ClassicWithIcon = props => {
  const {
    icon,
    text,
    iconWidth,
    textColor,
    iconHeight,
    fontFamily,
    iconComponent
  } = props;
  return (
    <View style={styles.container}>
      {iconComponent || (
        <FastImage source={icon} style={imageStyle(iconHeight, iconWidth)} />
      )}
      <Text numberOfLines={3} style={textStyle(textColor, fontFamily)}>
        {text}
      </Text>
    </View>
  );
};

ClassicWithIcon.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string
};

ClassicWithIcon.defaultProps = {
  icon: defaultImage,
  iconHeight: 95,
  iconWidth: 95,
  textColor: "#828b9a",
  text:
    "Memleked Cad. yönünde trafik kazasına yaklaşıyorsunuz. Alternatif yolları tercih ediniz."
};

export default ClassicWithIcon;
