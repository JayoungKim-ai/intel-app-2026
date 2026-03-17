import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { moodData } from "../data/moodData";
import { useState } from "react";
import MoodButton from "../components/MoodButton";
// console.log(moodData);

const MoodScreen = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const selectedItem = moodData.find((mood) => mood.id === selectedMood);
  console.log("selectedMood==>", selectedMood);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>오늘 기분이 어때요?</Text>
      </View>
      {/* Mood 버튼 *********************************/}
      {moodData.map((mood) => (
        <MoodButton
          key={mood.id}
          mood={mood}
          selectedMood={selectedMood}
          onPress={() => {
            setSelectedMood(mood.id);
          }}
        />
      ))}
      {/* 메시지 표시 버튼 *********************************/}
      <View style={styles.messageBox}>
        <Text style={styles.message}>
          {selectedItem && selectedItem.message}
        </Text>
        <Image
          source={selectedItem && selectedItem.image}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default MoodScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { marginBottom: 30 },
  titleText: { fontSize: 30, fontWeight: "600" },

  messageBox: {
    backgroundColor: "#fff",
    width: "80%",
    height: 150,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    // 그림자효과 (아이폰)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // 그림자효과 (안드로이드)
    elevation: 4,
  },

  message: { fontSize: 24 },
  image: { width: 100, height: 100 },
});
