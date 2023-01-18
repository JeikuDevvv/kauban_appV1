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
      <JeikuDevvv fontColor={"rgba(0, 0, 0, 0.2)"} />
      <View
        style={{
          borderTopWidth: 1,
          width: Dimensions.get("screen").width,
          alignItems: "center",
          padding: "1%",
          borderColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 12,
            color: "rgba(0, 0, 0, 0.2)",
          }}
        >
          Already have an account
        </Text>
      </View>
    </View>
  );
};
