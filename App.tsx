import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Fonts from "./assets/fonts/AccessFonts";
import { JeikuDevvv } from "./src/components/brand/JeikuDevvv";

export default function App() {
  if (!Fonts()) return null;
  return <JeikuDevvv />;
}
