import Colors from "@/constants/color";
import React, { PropsWithChildren } from "react";
import { Text, StyleSheet, Platform } from "react-native";

type Props = PropsWithChildren & {};

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
