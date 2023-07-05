import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Title from "../components/ui/Title";
import GuessNumber from "../components/game/GuessNumber";

function generateRandomNumer(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumer(min, max, exclude);
  } else {
    return randomNumber;
  }
}

const GameScreen = ({ choosenNum }) => {
  const guessNumber = generateRandomNumer(1, 100, choosenNum);
  const [currentGuessNumber, setcurrentGuessNumber] = useState(guessNumber);
  console.log(choosenNum);

  return (
    <View style={styles.gameContainer}>
      <View>
        <Title>Opponent's Guess</Title>
        <GuessNumber>{currentGuessNumber}</GuessNumber>
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
