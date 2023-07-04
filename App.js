import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function userNumberhandler(selectedNum) {
    setUserNumber(selectedNum);
  }

  let screen = <StartGameScreen onSelectNumber={userNumberhandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return <View>{screen}</View>;
}

const styles = StyleSheet.create({});
