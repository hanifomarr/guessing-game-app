import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import GuessNumber from "../components/game/GuessNumber";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumer(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumer(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let min = 1;
let max = 100;

const GameScreen = ({ choosenNum, onGameOver }) => {
  const guessNumber = generateRandomNumer(min, max, choosenNum);
  const [currentGuessNumber, setcurrentGuessNumber] = useState(() =>
    generateRandomNumer(min, max, guessNumber)
  );
  console.log(choosenNum);
  console.log(currentGuessNumber);
  console.log(guessNumber);

  useEffect(() => {
    if (currentGuessNumber === choosenNum) {
      onGameOver();
    }
  }, [currentGuessNumber, guessNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuessNumber < choosenNum) ||
      (direction == "greater" && currentGuessNumber > choosenNum)
    ) {
      Alert.alert("Dont Lie", "Please click on the right value button");
      return;
    }

    if (direction === "lower") {
      max = currentGuessNumber;
    } else {
      min = currentGuessNumber;
    }
    const newGuessNumber = generateRandomNumer(min, max, currentGuessNumber);
    setcurrentGuessNumber(newGuessNumber);
  }

  return (
    <View style={styles.gameContainer}>
      <View>
        <Title>Opponent's Guess</Title>
        <GuessNumber>{currentGuessNumber}</GuessNumber>
      </View>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            +
          </PrimaryButton>
        </View>
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
