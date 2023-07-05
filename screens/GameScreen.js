import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.gameContainer}>
      <View>
        <Title>Opponent's Guess</Title>
        {/* GUESS NUMBER */}
      </View>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
      {/* LOG ROUNDS */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
  },
});
