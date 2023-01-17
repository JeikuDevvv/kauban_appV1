import { Dimensions, Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  SafeAreaViewContainer: { flex: 1 },
  ViewContainer: {
    alignItems: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  /* Body Style */
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("screen").width,
  },
  formContainerStyles: {
    backgroundColor: "transparent",
    width: Dimensions.get("screen").width,
    height: heightPercentageToDP("60%"),
    alignContent: "center",
    alignItems: "center",
    top: heightPercentageToDP("30%"),
  },
  textStyles: {
    fontFamily: "Poppins-Medium",
    padding: "5%",
    fontSize: 20,
  },
  textInputStyles: {
    padding: "2%",
  },
  buttonStyles: {
    padding: "2%",
  },
  /* or styles */
  orStyles: { flexDirection: "row", alignItems: "center" },
  orlinesStyles: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 80,
  },
  textv2Styles: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.5)",
  },
  /* Footer */
  footerStyles: {
    bottom: "-30.5%",
  },
});
