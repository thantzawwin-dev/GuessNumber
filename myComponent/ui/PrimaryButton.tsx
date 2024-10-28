import Colors from "@/constants/color";
import React, { PropsWithChildren } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = PropsWithChildren & {
  onPress?: () => void;
};

/**
 * Primary Button
 *
 * @component
 * @example
 * <PrimaryButton>Click</PrimaryButton>
 *
 * @exports PrimaryButton
 */
const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors?.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors?.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
