import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { styles } from "./styles/SignInStyles";
import { GradientBackground } from "../../components/container/GradientBackground";
import { WavyHeader } from "../../components/WavyHeader";
import { TextInputField } from "../../components/input_fields/TextInputField";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { SecondaryButton } from "../../components/buttons/SecondaryButton";
import { AuthFooter } from "../../components/AuthFooter";

const SignInScreen = () => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.ViewContainer}>
        <GradientBackground style={styles.ViewContainer}>
          <WavyHeader style={styles.svgCurve} />
          {/* ------ */}
          <View style={styles.formContainerStyles}>
            <Text style={styles.textStyles}>Login</Text>
            <TextInputField
              style={styles.textInputStyles}
              placeholder={"Phone number or email"}
              value={value.email}
              onChangeText={(text: string) =>
                setValue({ ...value, email: text })
              }
            />
            <TextInputField
              style={styles.textInputStyles}
              placeholder={"Password"}
              value={value.password}
              onChangeText={(text: string) =>
                setValue({ ...value, password: text })
              }
            />
            <PrimaryButton style={styles.buttonStyles} buttonName={"Log in"} />

            <Text
              style={[styles.textv2Styles, { paddingTop: "10%" }]}
              onPress={() => console.log("Forgot Password?")}
            >
              Forgot Password?
            </Text>

            <View style={styles.orStyles}>
              <View style={styles.orlinesStyles} />
              <View>
                <Text style={[styles.textv2Styles, { width: 80 }]}>or</Text>
              </View>
              <View style={styles.orlinesStyles} />
            </View>
            <SecondaryButton
              style={[{ paddingTop: "10%" }]}
              buttonName={"Create new account"}
            />
          </View>
          <AuthFooter style={styles.footerStyles} />
        </GradientBackground>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
