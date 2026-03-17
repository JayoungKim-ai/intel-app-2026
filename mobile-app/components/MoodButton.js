import { StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

const MoodButton = ({ mood, onPress, selectedMood }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={mood.id}
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
    width: "80%",
    height: 70,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 100,
    gap: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  selected: {
    borderWidth: 5,
    borderColor: "#111",
  },
});
