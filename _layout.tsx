// app/_layout.tsx
import React from "react";
import { Slot } from "expo-router";

export default function RootLayout() {
  return <Slot />; // This is mandatory! Your pages render here.
}
