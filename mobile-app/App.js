import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MemoStackNavigator from "./navigation/MemoStackNavigator";
import { memoData } from "./data/memoData";
import { useState } from "react";
import { createContext } from "react";
export const MemoContext = createContext();

const App = () => {
  const [memos, setMemos] = useState(memoData);
  return (
    <MemoContext.Provider value={{ memos: memos, setMemos: setMemos }}>
      <NavigationContainer>
        <MemoStackNavigator />
      </NavigationContainer>
    </MemoContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
