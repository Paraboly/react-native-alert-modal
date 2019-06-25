import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import RoundedTitle from "../shared/RoundedTitle/RoundedTitle";

const { width } = Dimensions.get("window");

const ClassicOnlyText = props => {
  const { title, titleColor, titleTextColor } = props;
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <RoundedTitle
        title={title}
        titleColor={titleColor}
        titleWidth={width * 0.9}
        titleTextColor={titleTextColor}
      />
      <View style={{ margin: 16, alignItems: "center", width: width * 0.8 }}>
        <Text
          numberOfLines={3}
          style={{ color: "#828b9a", fontSize: 16, textAlign: "center" }}
        >
          2432. Caddesi yürüyüş sebebiyle 9.00 - 17.00 saatleri arasında kapalı
          olacaktır.
        </Text>
      </View>
    </View>
  );
};

ClassicOnlyText.propTypes = {
  title: PropTypes.string
};

ClassicOnlyText.defaultProps = {
  title: "Memleket Cad. Duyurusu"
};

export default ClassicOnlyText;
