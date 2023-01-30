import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import AppStack from "./AppStack";
import AuthStack from "./AppStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <AppStack /> : <AuthStack />;
}
