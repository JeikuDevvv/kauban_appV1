import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { styles } from "./styles/SignInStyles";
import { GradientBackground } from "../../components/container/GradientBackground";
import { WavyHeader } from "../../components/WavyHeader";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.ViewContainer}>
        <GradientBackground style={styles.ViewContainer}>
          <WavyHeader style={styles.svgCurve} />
        </GradientBackground>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
