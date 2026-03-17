import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const MoodButton = ({ mood, onPress, selectedMood }) => {
  return (
    <TouchableOpacity
      key={mood.id}
      onPress={onPress}
      style={[
        styles.button,
        selectedMood === mood.id && styles.selected,
        { backgroundColor: mood.color },
      ]}
    >
      <MaterialIcons name={mood.icon} size={40} color="black" />
      <Text style={styles.buttonText}>{mood.label}</Text>
    </TouchableOpacity>
  );
};

export default MoodButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: "80%",
    height: 70,
    justifyContent: "start",
    paddingLeft: 100,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    flexDirection: "row",
    gap: 10,
  },
  buttonText: { fontSize: 20 },
  selected: { borderWidth: 3 },
});
