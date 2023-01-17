import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";

export const GradientBackground = (props: any) => {
  return (
    <LinearGradient
      colors={
        Platform.OS === "ios"
          ? ["#FFFFFF", "#FFFFFF", "rgba(255, 182, 47, 1)"]
          : [
              "rgba(239, 252, 255, 1)",
              "rgba(239, 252, 255, 0.75)",
              "rgba(239, 252, 255, 0.5)",
            ]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  );
};
