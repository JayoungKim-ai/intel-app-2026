import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { useState } from "react";
const InputExampleScreen = () => {
  // 입력값을 관리할 상태 선언
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [search, setSearch] = useState("");
  const [bio, setBio] = useState("");

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}>자주 쓰는 TextInput 유형</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 1. 일반 텍스트  ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>아이디</Text>
          <TextInput
            style={styles.input}
            value={id}
            onChangeText={setId}
            maxLength={10}
          />
        </View>

        {/* 2. 비밀번호 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>비밀번호</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassWord}
            maxLength={100}
            secureTextEntry={true}
          />
        </View>
        {/* 3. 이메일 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>이메일</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="abc@naver.com"
            placeholderTextColor="#ccc"
            maxLength={100}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {/* 4. 전화번호 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>전화번호</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="0101234567"
            placeholderTextColor="#ccc"
            maxLength={10}
            keyboardType="phone-pad"
          />
        </View>
        {/* 5. 숫자 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>우편번호</Text>
          <TextInput
            style={styles.input}
            value={postalCode}
            onChangeText={setpostalCode}
            placeholder="12345"
            placeholderTextColor="#ccc"
            maxLength={5}
            keyboardType="numeric"
          />
        </View>

        {/* 7. 검색창 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>검색어</Text>
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={setSearch}
            maxLength={200}
            returnKeyType="search"
            onSubmitEditing={() => {
              console.log("검색");
            }}
          />
        </View>
        {/* 8. 여러줄 입력 ***********************************/}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>자기소개</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            value={bio}
            onChangeText={setBio}
            maxLength={1000}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

export default InputExampleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    width: "25%",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "75%",
  },
  multiline: {
    height: 120,
  },
});
