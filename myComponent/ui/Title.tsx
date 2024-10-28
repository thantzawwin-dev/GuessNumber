import Colors from "@/constants/color";
import React, { PropsWithChildren } from "react";
import { Text, StyleSheet } from "react-native";

type Props = PropsWithChildren & {};

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
