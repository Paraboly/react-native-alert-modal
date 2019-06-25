import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export function imageStyle(imageHeight, imageWidth) {
  return {
    width: imageHeight,
    height: imageWidth,
    marginLeft: 32
  };
}

export function textStyle(textColor, fontFamily) {
  return {
    fontFamily,
    fontSize: 16,
    marginTop: 16,
    marginLeft: 8,
    color: textColor,
    width: width * 0.6
  };
}

export default {
  container: {
    flexDirection: "row"
  }
};
