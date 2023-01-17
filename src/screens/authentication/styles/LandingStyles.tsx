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
  // Body
  jeikuStyles: {
    padding: "10%",
  },
  termspoliciesTextStyles: {},
  /* Footer */
  footerStyles: {
    alignItems: "center",
    paddingTop: "45%",
  },
  LinkTextStyles: {
    fontSize: Platform.OS === "ios" ? 15 : 10,
    fontFamily: "Poppins-Light",
    textAlign: "center",
  },
  InnerLinkTextStyles: {
    color: "#16163F",
    textShadowColor: "rgba(191, 234, 245, 1)",
    textShadowOffset:
      Platform.OS === "ios" ? { width: 1, height: 1 } : { width: 1, height: 1 },
    textShadowRadius: Platform.OS === "ios" ? 0 : 1,
  },
});
