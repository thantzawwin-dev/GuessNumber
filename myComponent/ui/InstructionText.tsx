import Colors from "@/constants/color";
import React, { PropsWithChildren } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

type Props = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
}>;

const InstructionText = ({ children, style }: Props) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
