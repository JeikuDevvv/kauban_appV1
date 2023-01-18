import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles/SignUpStyles";
import { GradientBackground } from "../../components/container/GradientBackground";
import { WavyHeader } from "../../components/WavyHeader";
import { TextInputField } from "../../components/input_fields/TextInputField";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";

const SignUpStyles = () => {
  const [value, setValue] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    error: "",
  });
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.ViewContainer}>
        <GradientBackground style={styles.ViewContainer}>
          <WavyHeader style={styles.svgCurve} />
          {/* ------ */}
          <View style={styles.formContainerStyles}>
            <TextInputField
              style={styles.textInputStyles}
              placeholder={"First Name"}
              value={value.firstname}
              onChangeText={(text: string) =>
                setValue({ ...value, firstname: text })
              }
            />
            <TextInputField
              style={styles.textInputStyles}
              placeholder={"Last Name"}
              value={value.lastname}
              onChangeText={(text: string) =>
                setValue({ ...value, lastname: text })
              }
            />
            <TextInputField
              style={styles.textInputStyles}
              placeholder={"email"}
              value={value.email}
              onChangeText={(text: string) =>
                setValue({ ...value, email: text })
              }
            />
            <PrimaryButton buttonName={"sign up"} />
          </View>
        </GradientBackground>
      </View>
    </SafeAreaView>
  );
};

export default SignUpStyles;
