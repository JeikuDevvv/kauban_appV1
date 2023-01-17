/**
 * Copyright (c) 2022 JeikuDevvv
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Image, View, StyleSheet } from "react-native";

export const Logo = (props: any) => {
  return (
    <View style={props.style}>
      <View style={props.style}>
        <Image
          source={require("../../../assets/img/logo/kauban_app_logo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoShadow: {
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 2,
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },
});
