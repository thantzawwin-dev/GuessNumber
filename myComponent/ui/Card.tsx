import Colors from "@/constants/color";
import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

type Props = PropsWithChildren & {};

const Card = ({ children }: Props) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 2 },
  },
});
