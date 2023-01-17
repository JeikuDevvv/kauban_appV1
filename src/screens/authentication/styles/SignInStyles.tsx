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
});
