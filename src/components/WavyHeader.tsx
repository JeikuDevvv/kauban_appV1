/**
 * Copyright (c) 2022 JeikuDevvv
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { Platform, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const WavyHeader = (props: any) => {
  return (
    <View style={props.style}>
      <View
        style={{
          backgroundColor: "rgba(130, 170, 227, 1)",
          height: 160,
        }}
      >
        <Svg
          height={Platform.OS === "ios" ? "89.5%" : "92%"}
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 136 }}
        >
          <Path
            fill="rgba(130, 170, 227, 1)"
            d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,181.3C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
};
