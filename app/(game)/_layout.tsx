import { Slot, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    // <Stack screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="index" options={{ headerShown: false }} />
    //   <Stack.Screen name="GameScreen" options={{ headerShown: false }} />
    //   <Stack.Screen name="GameOverScreen" options={{ headerShown: false }} />
    // </Stack>
    <Slot />
  );
}
