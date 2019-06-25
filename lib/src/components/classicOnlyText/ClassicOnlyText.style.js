import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export function textStyle(textColor, fontFamily) {
  return {
    fontFamily,
    fontSize: 16,
    color: textColor,
    textAlign: "center"
  };
}

export default {
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    margin: 16,
    width: width * 0.8,
    alignItems: "center"
  }
};
