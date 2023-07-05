import { View, Text, Pressable, StyleSheet } from "react-native";
import COLORS from "../../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#F7FFE5" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 5,
    borderRadius: 6,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    padding: 15,
    backgroundColor: COLORS.light,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.primary200,
  },
});
