import { StyleSheet, Text, View } from "react-native";
import React from "react";

// StackNavigator 생성
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// 사용할 화면 import
import MemoListScreen from "../screens/MemoListScreen";
import MemoDetailScreen from "../screens/MemoDetailScreen";
import MemoFormScreen from "../screens/MemoFormScreen";

const MemoStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="memoList"
        component={MemoListScreen}
        options={{ title: "메모목록" }}
      />
      <Stack.Screen
        name="memoForm"
        component={MemoFormScreen}
        options={{ title: "메모작성" }}
      />
      <Stack.Screen
        name="memoDetail"
        component={MemoDetailScreen}
        options={{ title: "메모내용" }}
      />
    </Stack.Navigator>
  );
};

export default MemoStackNavigator;

const styles = StyleSheet.create({});
