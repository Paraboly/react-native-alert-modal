import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export function imageStyle(imageHeight, imageWidth) {
  return {
    width: imageHeight,
    height: imageWidth,
    marginLeft: 8
  };
}

export function contextStyle(contextColor, fontFamily) {
  return {
    top: 12,
    fontFamily,
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
