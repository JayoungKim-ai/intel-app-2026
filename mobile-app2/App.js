import { StyleSheet } from "react-native";

// 전체 Navigator를 감싸는 컴포넌트
import { NavigationContainer } from "@react-navigation/native";
import MemoStackNavigator from "./navigator/MemoStackNavigator";

// MemoContext에서
import { MemoProvider } from "./context/MemoContext";
// import ImageClassifierScreen from "./screens/ImageClassifierScreen";

const App = () => {
  return (
    <MemoProvider>
      <NavigationContainer>
        <MemoStackNavigator />
      </NavigationContainer>
    </MemoProvider>
    // <ImageClassifierScreen />
  );
};

export default App;

const styles = StyleSheet.create({});
