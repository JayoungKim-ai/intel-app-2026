import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";

const UpDownGameScreen = () => {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
  const [userInput, setUserInput] = useState(""); //사용자가 입력한 값
  const [result, setResult] = useState("");
  console.log(answer);
  const handleCheck = () => {
    const num = parseInt(userInput);
    if (isNaN(num) || num < 1 || num > 100) {
      Alert.alert("입력값오류", "1-100 사이의 숫자를 입력하세요");
      return;
    }
    Keyboard.dismiss();
    if (answer === num) {
      Alert.alert("정답", "정답입니다. 게임을 다시 시작할까요?", [
        {
          text: "예",
          style: "default",
          onPress: () => {
            console.log("다시시작");
            setAnswer(Math.floor(Math.random() * 100) + 1);
            setUserInput("");
            setResult("");
          },
        },
        { text: "아니오", style: "cancel" },
      ]);
      setResult("Correct!");
    } else if (answer > num) {
      setResult("UP!");
    } else {
      setResult("Down!");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>UpDown 숫자 맞추기 게임</Text>
        <Text style={styles.subTitle}>1-100 사이의 숫자를 입력하세요</Text>
        {/* 숫자 입력받기 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={3}
            value={userInput}
            onChangeText={setUserInput}
            returnKeyType="done"
            onSubmitEditing={handleCheck}
          />

          <TouchableOpacity style={styles.button} onPress={handleCheck}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
        {/* 결과 출력 */}
        <View style={styles.resultBox}>
          <Text>{result}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UpDownGameScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
  },
  inputContainer: { flexDirection: "row", padding: 30 },
  input: {
    borderWidth: 1,
    width: 150,
    height: 100,
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 30, color: "#fff" },
  resultBox: {
    backgroundColor: "#fff",
    width: "80%",
    height: 300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // 그림자효과 (아이폰)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // 그림자효과 (안드로이드)
    elevation: 4,
  },
});
