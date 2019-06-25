import React from "react";
import { Dimensions, View } from "react-native";
import styles from "./ClassicTriple.style";
import InfoBoxes from "../shared/InfoBoxes/InfoBoxes";
import RoundedTitle from "../shared/RoundedTitle/RoundedTitle";

const { width } = Dimensions.get("window");

const ClassicTriple = props => {
  const {
    data,
    iconComponent,
    title,
    titleColor,
    titleTextColor,
    titleFontFamily
  } = props;
  return (
    <View style={styles.container}>
      <RoundedTitle
        title={title}
        titleColor={titleColor}
        titleWidth={width * 0.9}
        fontFamily={titleFontFamily}
        titleTextColor={titleTextColor}
      />
      <View style={styles.infoboxContainer}>
        <InfoBoxes data={data} iconComponent={iconComponent} />
      </View>
    </View>
  );
};

export default ClassicTriple;
