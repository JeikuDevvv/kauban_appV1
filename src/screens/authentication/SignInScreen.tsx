import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { styles } from "./styles/SignInStyles";
import { GradientBackground } from "../../components/container/GradientBackground";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.ViewContainer}>
        <GradientBackground style={styles.ViewContainer}></GradientBackground>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
