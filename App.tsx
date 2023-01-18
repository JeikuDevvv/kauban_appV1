import Fonts from "./assets/fonts/AccessFonts";
import SignUpScreen from "./src/screens/authentication/SignUpScreen";

export default function App() {
  if (!Fonts()) return null;
  return <SignUpScreen />;
}
