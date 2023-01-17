/**
 * Copyright (c) 2022 JeikuDevvv
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { JeikuDevvv } from "./brand/JeikuDevvv";

export const AuthFooter = (props: any) => {
  return (
    <View style={props.style}>
      <JeikuDevvv />
      <View
        style={{
          borderTopWidth: 1,
          width: Dimensions.get("screen").width,
          alignItems: "center",
          padding: "1%",
        }}
      >
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12 }}>
          Already have an account?
        </Text>
      </View>
    </View>
  );
};
