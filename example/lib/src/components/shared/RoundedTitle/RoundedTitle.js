import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import { titleStyle, titleTextStyle } from "./RoundedTitle.style";

const { width } = Dimensions.get("window");

const RoundedTitle = props => {
  const { title, titleColor, titleWidth, titleTextColor } = props;
  return (
    <View style={titleStyle(titleColor, titleWidth)}>
      <Text numberOfLines={1} style={titleTextStyle(titleTextColor)}>
        {title}
      </Text>
    </View>
  );
};

RoundedTitle.propTypes = {
  title: PropTypes.string,
  titleWidth: PropTypes.number,
  titleColor: PropTypes.string,
  titleTextColor: PropTypes.string
};

RoundedTitle.defaultProps = {
  titleTextColor: "white",
  titleWidth: width * 0.65,
  titleColor: "rgba(251, 130, 107, 1.0)",
  title: "Trafik kazasına yaklaşıyorsunuz"
};

export default RoundedTitle;
