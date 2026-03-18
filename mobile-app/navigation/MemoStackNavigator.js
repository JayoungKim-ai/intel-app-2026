import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MemoListScreen from "../screens/MemoListScreen";
import MemoDetailScreen from "../screens/MemoDetailScreen";
import MemoFormScreen from "../screens/MemoFormScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Stack Navigator 생성
const Stack = createNativeStackNavigator();
const MemoStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="memo"
        component={MemoListScreen}
        options={{ title: "메모목록" }}
      />
      <Stack.Screen
        name="memoDetail"
        component={MemoDetailScreen}
        options={{ title: "메모내용" }}
      />
      <Stack.Screen
        name="memoForm"
        component={MemoFormScreen}
        options={{ title: "메모작성" }}
      />
    </Stack.Navigator>
  );
};

export default MemoStackNavigator;

const styles = StyleSheet.create({});
