import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export const HeaderText = (props: any) => {
  return (
    <>
      <View style={[props.style, styles.container]}>
        <Text style={[styles.welcomeTextStyle, styles.textStyles]}>
          {props.rightHeading}
        </Text>
        <Text style={[styles.welcomeTextStyle, styles.textStyles]}>
          {props.leftHeading}
        </Text>
      </View>
      <Text style={[styles.taglineTextStyle, styles.textStyles]}>
        {props.taglineHeading}
        {/* collaboration | innovation | socialization{' '} */}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeTextStyle: {
    fontSize: Platform.OS === "ios" ? 29 : 20,
    fontFamily: "Poppins-Bold",
  },
  taglineTextStyle: {
    fontSize: Platform.OS === "ios" ? 15 : 12,
    fontFamily: "Poppins-Italic",
    textAlign: "center",
  },
  textStyles: {
    color: "#16163F",
    letterSpacing: Platform.OS === "ios" ? 2 : 2,
    textShadowColor: "rgba(191, 234, 245, 1)",
    textShadowOffset:
      Platform.OS === "ios" ? { width: 1, height: 1 } : { width: 1, height: 1 },
    textShadowRadius: Platform.OS === "ios" ? 0 : 1,
  },
});
