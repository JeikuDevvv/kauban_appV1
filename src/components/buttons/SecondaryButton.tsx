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

export const SecondaryButton = (props: any) => {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.ButtonContainer}
        onPress={() => console.log("Secondary Button")}
      >
        <Text style={styles.buttonText}>{props.buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(4),
    borderStyle: "solid",
    borderRadius: 15,
    backgroundColor: "rgba(130, 170, 227, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: "Poppins-Medium",
    color: "#468DF2",
  },
});
