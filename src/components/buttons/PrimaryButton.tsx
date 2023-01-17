import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const PrimaryButton = (props: any) => {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.ButtonContainer}
        onPress={() => console.log("nani")}
      >
        <Text style={styles.buttonText}>{props.buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP("60%"),
    borderStyle: "solid",
    borderRadius: 15,
    backgroundColor: "#82AAE3",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
});
