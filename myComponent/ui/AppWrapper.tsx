import React, { PropsWithChildren } from "react";
import {
  View,
  // StatusBar,
  Text,
  StyleSheet,
  ImageBackground,
  // SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/color";
type Props = PropsWithChildren & {};

const AppWrapper = ({ children }: Props) => {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.wrapper}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("@/assets/images/riho-kroll-unsplash.jpg")}
          style={styles.wrapper}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.wrapper}>
            {/* <StatusBar barStyle="light-content" /> */}
            {children}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
