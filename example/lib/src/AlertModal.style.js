import { Dimensions } from "react-native";
import { getStatusBarHeight } from "./helpers/helpers";

const { width, height } = Dimensions.get("window");

export function container(containerHeight, containerPaddingTop) {
  return {
    width,
    height: containerHeight,
    paddingTop: containerPaddingTop
  };
}

export function stickOnTop() {
  return {
    top: 0,
    position: "absolute"
  };
}

export default {
  modalStyle: { margin: 0 }
};
