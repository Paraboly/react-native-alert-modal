/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { container, titleStyle, valueStyle } from "./InfoBoxes.style";

const template = [
  {
    type: "severity",
    value: "Düşük",
    key: "Şiddeti"
  },
  {
    type: "effectedLines",
    value: "Mevcut Değil",
    key: "Etkilenen Şerit"
  },
  {
    key: "Şerit Sayısı",
    type: "text",
    value: "2"
  }
];

const InfoBoxes = props => {
  const {
    data,
    baseColor,
    titleColor,
    iconComponent,
    titleFontFamily,
    valueFontFamily
  } = props;

  if (data) {
    return data.map((item, index) => {
      let keys = index;
      const renderTitle = (
        <Text style={titleStyle(titleColor, titleFontFamily)} key={++keys}>
          {item.key}
        </Text>
      );

      const renderValue = (
        <Text style={valueStyle(baseColor, valueFontFamily)} key={++keys}>
          {item.value}
        </Text>
      );

      const renderIcon = (
        <Icon
          size={40}
          type="Ionicons"
          color={baseColor}
          name={item.icon}
          key={++keys}
        />
      );

      const renderItem = () => {
        const temp = [];
        if (item.key) {
          temp.push(renderTitle);
        }
        if (item.icon) {
          if (iconComponent) temp.push(iconComponent);
          else temp.push(renderIcon);
          if (item.value) {
            temp.push(renderValue);
          }
          return temp;
        }
        if (item.value) {
          temp.push(renderValue);
        }
        return temp;
      };

      return (
        <View key={item.key || index} style={container(index)}>
          {renderItem()}
        </View>
      );
    });
  }
  return null;
};

InfoBoxes.propTypes = {
  data: PropTypes.array,
  baseColor: PropTypes.string,
  titleColor: PropTypes.string
};

InfoBoxes.defaultProps = {
  data: template,
  baseColor: "#fb826b",
  titleColor: "#b3b6c3"
};

export default InfoBoxes;
