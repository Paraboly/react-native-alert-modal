import { Platform } from "react-native";

export function circleStyle(circleSize, circleColor) {
  return {
    borderWidth: 3,
    width: circleSize || 56,
    height: circleSize || 56,
    borderRadius: (circleSize || 56) / 2,
    borderColor: circleColor || "#bf747d"
  };
}

export default {
  circleContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        bottom: 8
      },
      android: {
        bottom: 12
      }
    })
  },
  center: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  speedTextStyle: {
    fontSize: 28,
    color: "#455478"
  }
};
