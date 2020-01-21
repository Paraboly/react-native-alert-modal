import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import styles, { imageStyle, textStyle } from "./ClassicWIthIcon.style";

const defaultImage = require("../../../local_assets/trial.png");

const ClassicWithIcon = props => {
  const {
    icon,
    text,
    iconWidth,
    textColor,
    iconHeight,
    fontFamily,
    iconComponent,
    ImageComponent
  } = props;
  return (
    <View style={styles.container}>
      {iconComponent || (
        <ImageComponent
          source={icon}
          style={imageStyle(iconHeight, iconWidth)}
        />
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
  iconWidth: 95,
  iconHeight: 95,
  icon: defaultImage,
  ImageComponent: Image,
  textColor: "#828b9a",
  text:
    "Memleked Cad. yönünde trafik kazasına yaklaşıyorsunuz. Alternatif yolları tercih ediniz."
};

export default ClassicWithIcon;
