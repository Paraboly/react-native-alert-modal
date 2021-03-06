export function titleStyle(backgroundColor, titleWidth) {
  return {
    padding: 3,
    backgroundColor,
    borderRadius: 16,
    width: titleWidth
  };
}

export function titleTextStyle(textColor, fontFamily) {
  return {
    fontFamily,
    marginLeft: 8,
    color: textColor,
    fontWeight: "600",
    textAlign: "center"
  };
}
