import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MemoContext } from "../context/MemoContext";

const MemoFormScreen = ({ navigation, route }) => {
  const { memos, setMemos } = useContext(MemoContext);

  const updateItem = route.params
    ? memos.find((m) => m.id === route.params.id)
    : null;
  console.log(updateItem);

  const [title, setTitle] = useState(updateItem ? updateItem.title : "");
  const [content, setContent] = useState(updateItem ? updateItem.content : "");
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
          <TouchableOpacity>
            <Text style={styles.cancelButton}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (updateItem) {
                console.log("수정");
                const updatedMemos = memos.map((m) =>
                  m.id === updateItem.id
                    ? { ...m, title: title.trim(), content: content.trim() }
                    : m,
                );
                setMemos(updatedMemos);
                navigation.goBack();
              } else {
                const newMemo = {
                  id: Date.now().toString(),
                  title: title.trim(),
                  content: content.trim(),
                  createdAt: new Date().toLocaleDateString("ko-KR"),
                };
                setMemos([newMemo, ...memos]);
                navigation.navigate("memoDetail", { id: newMemo.id });
              }
            }}
          >
            <Text style={styles.saveButton}>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MemoFormScreen;

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
