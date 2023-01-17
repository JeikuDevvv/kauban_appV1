import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Fonts from "./assets/fonts/AccessFonts";
import SignInScreen from "./src/screens/authentication/SignInScreen";

export default function App() {
  if (!Fonts()) return null;
  return <SignInScreen />;
}
