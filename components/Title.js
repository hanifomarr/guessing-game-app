import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    color: COLORS.primary500,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: COLORS.primary500,
    padding: 14,
  },
});
