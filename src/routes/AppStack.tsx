import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FeedScreen from "../screens/app/FeedScreen";

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
