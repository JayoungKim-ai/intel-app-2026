import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { useState } from "react";

const InputExampleScreen = () => {
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [search, setSearch] = useState("");
  const [bio, setBio] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}>자주 쓰는 TextInput 유형</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* 1. 일반 텍스트  ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>아이디</Text>
            <TextInput
              style={styles.input}
              value={id}
              onChangeText={setId}
              placeholder="아이디를 입력해주세요."
              placeholderTextColor="#ccc"
              maxLength={10}
              // 1. Android 자동 완성 서비스 제외 (가장 핵심)
              importantForAutofill="no"
              // 2. 자동 완성 기능 끄기
              autoComplete="off"
              // 3. iOS용 자동 완성 타입 설정 해제
              textContentType="none"
              // 4. (필요 시) 이전 입력값 제안 끄기
              autoCorrect={false}
            />
          </View>
          {/* 2. 비밀번호 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassWord}
              placeholder="비밀번호를 입력해주세요."
              placeholderTextColor="#ccc"
              maxLength={20}
              secureTextEntry={true}
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
              autoCorrect={false}
            />
          </View>
          {/* 3. 이메일 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>이메일</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="example@naver.com"
              placeholderTextColor="#ccc"
              maxLength={100}
              keyboardType="email-address"
              autoCapitalize="none"
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
              autoCorrect={false}
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
              maxLength={12}
              keyboardType="phone-pad"
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
              autoCorrect={false}
            />
          </View>
          {/* 5. 숫자 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>우편번호</Text>
            <TextInput
              style={styles.input}
              value={postalCode}
              onChangeText={setPostalCode}
              maxLength={5}
              keyboardType="numeric"
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
              autoCorrect={false}
            />
          </View>
          {/* 6. 검색창 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>검색어</Text>
            <TextInput
              style={styles.input}
              value={search}
              onChangeText={setSearch}
              maxLength={100}
              returnKeyType="search"
              onSubmitEditing={() => {
                console.log(search, "검색");
              }}
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
              autoCorrect={false}
            />
          </View>
          {/* 7. 여러줄 입력 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>자기소개</Text>
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: "top" }]}
              value={bio}
              onChangeText={setBio}
              maxLength={1000}
              multiline={true}
              numberOfLines={4}
              importantForAutofill="no"
              autoComplete="off"
              textContentType="none"
              autoCorrect={false}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    marginBottom: 50,
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
  focus: {
    backgroundColor: "#d0e2fd",
    borderWidth: 3,
  },
});
