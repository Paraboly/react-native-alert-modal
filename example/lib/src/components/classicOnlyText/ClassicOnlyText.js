import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import RoundedTitle from "../shared/RoundedTitle/RoundedTitle";
import styles, { textStyle } from "./ClassicOnlyText.style";

const { width } = Dimensions.get("window");

const ClassicOnlyText = props => {
  const {
    text,
    title,
    textColor,
    titleColor,
    fontFamily,
    titleTextColor
  } = props;
  return (
    <View style={styles.container}>
      <RoundedTitle
        title={title}
        titleColor={titleColor}
        titleWidth={width * 0.9}
        titleTextColor={titleTextColor}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={3} style={textStyle(textColor, fontFamily)}>
          {text}
        </Text>
      </View>
    </View>
  );
};

ClassicOnlyText.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string
};

ClassicOnlyText.defaultProps = {
  text:
    "2432. Caddesi yürüyüş sebebiyle 9.00 - 17.00 saatleri arasında kapalı olacaktır.",
  textColor: "#828b9a",
  title: "Memleket Cad. Duyurusu"
};

export default ClassicOnlyText;
