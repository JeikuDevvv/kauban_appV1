import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const TextInputField = (props: any) => {
  return (
    <View style={props.style}>
      <View style={styles.inputFieldContainer}>
        <TextInput
          style={styles.textInputStyles}
          placeholder={props.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType={props.textContentType}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
        />
      </View>
      <Text style={styles.errorTextStyles}> ERROR: This is error message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(4),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgb(22, 22, 63)",
    backgroundColor: "rgba(239, 252, 255, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  textInputStyles: {
    width: widthPercentageToDP(70),
    height: heightPercentageToDP(5),
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    paddingLeft: 10,
  },
  errorTextStyles: {
    fontFamily: "Poppins-LightItalic",
    fontSize: 10,
  },
});
