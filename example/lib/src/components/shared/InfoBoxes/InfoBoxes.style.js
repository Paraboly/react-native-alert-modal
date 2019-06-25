export function container(index) {
  return {
    bottom: 8,
    height: 60,
    padding: 8,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "transparent",
    width: index === 1 ? 150 : 100
  };
}
export function valueStyle(baseColor, fontFamily) {
  return {
    top: 8,
    fontFamily,
    fontSize: 17,
    color: baseColor,
    fontWeight: "700",
    textAlign: "center",
    alignItems: "center"
  };
}

export function titleStyle(titleColor, fontFamily) {
  return {
    fontFamily,
    fontSize: 15,
    color: titleColor,
    textAlign: "center"
  };
}
