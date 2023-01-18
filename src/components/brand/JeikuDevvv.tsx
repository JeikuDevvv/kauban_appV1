/**
 * Copyright (c) 2022 JeikuDevvv
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

export const JeikuDevvv = (props: any) => {
  interface props {
    fontColor: string;
  }

  return (
    <View style={[props.style, { alignItems: "center" }]}>
      <Text style={[styles.textStyles, { color: props.fontColor }]}>
        {"J { dev. }"}
      </Text>
      <Text style={[styles.textStyles, { color: props.fontColor }]}>
        ジェイク・デヴ
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: { fontFamily: "Poppins-Bold", color: "black" },
});
