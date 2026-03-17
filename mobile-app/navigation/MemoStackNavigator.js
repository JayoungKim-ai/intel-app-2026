import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MemoListScreen from "../screens/MemoListScreen";
import MemoDetailScreen from "../screens/MemoDetailScreen";
import MemoFormScreen from "../screens/MemoFormScreen";
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
        options={{ title: "새메모" }}
      />
    </Stack.Navigator>
  );
};

export default MemoStackNavigator;

const styles = StyleSheet.create({});
