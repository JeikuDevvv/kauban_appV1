import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../screens/authentication/LandingScreen";
import SignInScreen from "../screens/authentication/SignInScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing Screen" component={LandingScreen} />
        <Stack.Screen name="SignIn Screen" component={SignInScreen} />
        <Stack.Screen name="SignUp Screen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
