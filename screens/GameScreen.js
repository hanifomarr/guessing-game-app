import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GameScreen = () => {
  return (
    <View style={styles.gameContainer}>
      <View>
        <Text>GameScrssseen</Text>
      </View>
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
