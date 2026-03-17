import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import LottieView from "lottie-react-native";

const UpdownScreen = () => {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1); // 정답
  const [userInput, setUserInput] = useState(""); // 사용자가 입력한 값
  const [message, setMessage] = useState("1-100 사이의 숫자를 맞춰보세요"); // 결과창에 보여줄 값
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState("start"); // "start", "up", "down", "correct"

  // 타이머 관련
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [attempts, setAttempts] = useState(0); // 시도 횟수도 같이 추가

  const LOTTIE_MAP = {
    up: require("../assets/up.json"),
    down: require("../assets/down.json"),
    correct: require("../assets/Success.json"),
  };

  console.log(answer);
  const handleReset = () => {
    setAnswer(Math.floor(Math.random() * 100) + 1);
    setUserInput("");
    setMessage("");
    setStatus("start");
  };
  const handleCheck = () => {
    const num = parseInt(userInput);
    if (isNaN(num) || num < 1 || num > 100) {
      Alert.alert("입력값 오류", "1-100 사이의 숫자를 입력하세요.");
      return;
    }
    Keyboard.dismiss();
    setMessage(
      answer === num ? "정답입니다" : answer > num ? "UP하세요" : "Down하세요",
    );
    setStatus(
      answer === num
        ? "correct"
        : answer > num
          ? "up"
          : answer < num
            ? "down"
            : null,
    );
    // 정답을 맞추면 게임 다시 시작
    if (answer === num) {
      Alert.alert("정답!", "정답을 맞추셨습니다. 게임을 다시 시작할까요?", [
        { text: "아니오", style: "cancel" },
        {
          text: "예",
          style: "default",
          onPress: handleReset,
        },
      ]);
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
            style={[styles.input, isFocused && { backgroundColor: "#e2f4ff" }]}
            keyboardType="numeric"
            maxLength={3}
            value={userInput}
            onChangeText={setUserInput}
            onSubmitEditing={handleCheck}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={handleCheck}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
        {/* 결과 출력 */}
        <View style={styles.resultBox}>
          <Text>{message}</Text>

          {LOTTIE_MAP[status] && (
            <LottieView
              source={LOTTIE_MAP[status]}
              autoPlay
              loop
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UpdownScreen;

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
