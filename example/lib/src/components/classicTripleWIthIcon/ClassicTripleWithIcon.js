import React from "react";
import PropTypes from "prop-types";
import { View, Text, Dimensions } from "react-native";
import Circle from "../shared/Circle/Circle";
import Icon from "react-native-dynamic-vector-icons";
import circleStyles from "../shared/Circle/Circle.style";
import RoundedTitle from "../shared/RoundedTitle/RoundedTitle";
import styles, { boxContainer } from "./ClassicTripleWithIcon.style";

const { width } = Dimensions.get("window");

const staticData = [
  {
    key: "Otomobil",
    value: "-",
    icon: "eds_car"
  },
  {
    key: "Minibüs/Otobüs",
    value: "-",
    icon: "eds_bus"
  },
  {
    key: "Kamyon/TIR",
    value: "-",
    icon: "eds_truck"
  }
];

function renderCircles(item) {
  return <Circle value={item.value} />;
}

function renderInfoBoxes(props) {
  let data = staticData;
  const { iconComponent } = props;
  if (props && props.data) {
    data = props.data;
  }

  return data.map((item, index) => (
    <View key={item.key} style={boxContainer(index)}>
      <Text style={styles.infoBoxTitleStyle}>
        {item.key || staticData[index].icon}
      </Text>
      <View style={styles.infoBoxIconStyle}>
        {iconComponent || (
          <Icon size={50} name="ios-car" type="Ionicons" color="#455478" />
        )}
      </View>
      <View style={circleStyles.circleContainerStyle}>
        {renderCircles(item)}
      </View>
    </View>
  ));
}

const ClassicTripleWithIcon = props => {
  const { data, titleColor } = props;
  return (
    <View style={styles.container}>
      <View>
        <RoundedTitle titleWidth={width * 0.9} titleColor={titleColor} />
      </View>
      <View style={styles.infoBoxContainerGlue}>{renderInfoBoxes(props)}</View>
    </View>
  );
};

ClassicTripleWithIcon.propTypes = {
  titleColor: PropTypes.string
};

ClassicTripleWithIcon.defaultProps = {
  titleColor: "#8065b9"
};

export default ClassicTripleWithIcon;
