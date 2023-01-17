import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { styles } from "./styles/LandingStyles";
import { GradientBackground } from "../../components/container/GradientBackground";
import { JeikuDevvv } from "../../components/brand/JeikuDevvv";
import { Logo } from "../../components/brand/Logo";
import { FormHeader } from "../../components/FormHeader";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";

const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.ViewContainer}>
        <GradientBackground style={styles.ViewContainer}>
          <JeikuDevvv style={styles.jeikuStyles} />
          <Logo style={styles.jeikuStyles} />
          {/* ------ */}
          <FormHeader
            rightHeading={"Welcome "}
            leftHeading={"to Kauban App"}
            taglineHeading={"collaboration | innovation | socialization"}
          />
          <View style={styles.footerStyles}>
            <Text style={styles.LinkTextStyles}>
              Read our{" "}
              <Text
                onPress={() => console.log("Privacy Policy")}
                style={[
                  { textDecorationLine: "underline" },
                  styles.InnerLinkTextStyles,
                ]}
              >
                Privacy Policy
              </Text>
            </Text>
            <Text style={styles.LinkTextStyles}>
              By tapping "Get Started" you agree to our{" "}
              <Text
                onPress={() => console.log("Terms & Policies")}
                style={[
                  { textDecorationLine: "underline" },
                  styles.InnerLinkTextStyles,
                ]}
              >
                Terms & Policies
              </Text>
            </Text>
            <Text>{""}</Text>
          </View>
          <PrimaryButton buttonName={"Start now"} />
        </GradientBackground>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
