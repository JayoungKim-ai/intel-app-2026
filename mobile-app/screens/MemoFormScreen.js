import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MemoContext } from "../App";

const MemoForm = ({ navigation, route }) => {
  const { memos, setMemos } = useContext(MemoContext);
  const { id, update } = route.params;
  const item = memos.find((memo) => memo.id === id);
  const [title, setTitle] = useState(item ? item.title : "");
  const [content, setContent] = useState(item ? item.content : "");

  const handleSave = () => {
    if (title.trim() === "") {
      Alert.alert("알림", "제목을 입력하세요.");
      return;
    }
    if (content.trim() === "") {
      Alert.alert("알림", "내용을 입력하세요.");
      return;
    }
    if (update) {
      const updatedMemo = memos.map((memo) =>
        memo.id === id
          ? { ...memo, title: title.trim(), content: content.trim() }
          : memo,
      );
      setMemos(updatedMemo);
      navigation.navigate("memoDetail", { id: id });
    } else {
      const newMemo = {
        id: Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date(Date.now() + 9 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
      };
      console.log("새 메모:", newMemo);
      setMemos([newMemo, ...memos]);
      navigation.navigate("memoDetail", { id: newMemo.id });
    }
  };
  return (
    <View style={styles.container} edges={["bottom"]}>
      {/* 입력 영역 */}
      <View style={styles.content}>
        <TextInput
          style={styles.titleInput}
          placeholder="제목"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.contentInput}
          placeholder="내용을 입력하세요..."
          placeholderTextColor="#999"
          multiline={true}
          textAlignVertical="top"
          value={content}
          onChangeText={setContent}
        />
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.cancelButton}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveButton}>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MemoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },
  contentInput: {
    flex: 0.3,
    fontSize: 16,
    color: "#333",
    lineHeight: 10,
    backgroundColor: "#f5f5f5",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    fontSize: 16,
    color: "#666",
  },
  saveButton: {
    fontSize: 16,
    color: "#4A90D9",
    fontWeight: "600",
  },
});
