import { View, Text, StyleSheet } from "react-native";

const GuessNumber = ({ children }) => {
  return (
    <View style={styles.guessNumberContainer}>
      <Text style={styles.guessNumberText}>{children}</Text>
    </View>
  );
};

export default GuessNumber;

const styles = StyleSheet.create({
  guessNumberContainer: {
    borderWidth: 4,
  },
  guessNumberText: {
    fontSize: 36,
  },
});
