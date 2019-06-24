import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export function imageStyle(imageHeight, imageWidth) {
  return {
    width: imageHeight,
    height: imageWidth,
    marginLeft: 8
  };
}

export function titleStyle(backgroundColor) {
  return {
    padding: 3,
    backgroundColor,
    borderRadius: 16,
    width: width * 0.65
  };
}

export function titleTextStyle(textColor) {
  return {
    marginLeft: 8,
    color: textColor,
    fontWeight: "600"
  };
}

export function contextStyle(contextColor) {
  return {
    top: 12,
    fontSize: 20,
    color: contextColor,
    textAlign: "center",
    width: width * 0.65
  };
}

export default {
  container: { flexDirection: "row" },
  containerGlue: {
    top: 8,
    margin: 8,
    flexDirection: "column"
  }
};
