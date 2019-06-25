import { Platform, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export function boxContainer(index) {
  return {
    bottom: 16,
    height: 115,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "column",
    width: index === 1 ? 150 : 100
  };
}

export default {
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  infoBoxContainerGlue: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  infoBoxTitleStyle: {
    top: 16,
    fontSize: 12,
    color: "#b3b6c3",
    textAlign: "center"
  },
  infoBoxIconStyle: {
    paddingTop: 18,
    paddingBottom: 12
  }
};
