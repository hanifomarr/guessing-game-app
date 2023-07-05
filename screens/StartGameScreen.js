import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import COLORS from "../constants/Colors";

const StartGameScreen = ({ onSelectNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputNumberHandler(inputNum) {
    setEnteredNumber(inputNum);
  }

  function resetInputNumber() {
    setEnteredNumber("");
  }

  function confirmInputButton() {
    const chooseNum = parseInt(enteredNumber);

    if (isNaN(chooseNum) || chooseNum <= 0 || chooseNum > 100) {
      Alert.alert(
        "Invalid Number",
        "Please input a number between 1 to 99 only",
        []
      );
      return;
    }
    onSelectNumber(chooseNum);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={inputNumberHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputButton}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 6,
    backgroundColor: COLORS.primary200,
    elevation: 4,
    shadowColor: COLORS.primary500,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    width: 80,
    height: 80,
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.light,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.light,
    marginVertical: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
