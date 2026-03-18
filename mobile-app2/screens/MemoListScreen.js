// MemoListScreen.js

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { MemoContext } from "../context/MemoContext";

const MemoListScreen = ({ navigation }) => {
  const { memos, setMemos } = useContext(MemoContext);
  const [searchText, setSearchText] = useState("");
  const [keyword, setKeyword] = useState("");
  const filteredMemos = memos.filter(
    (memo) =>
      memo.title.toLowerCase().includes(keyword.toLowerCase()) ||
      memo.content.toLowerCase().includes(keyword.toLowerCase()),
  );
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memoBox}
      onPress={() => {
        navigation.navigate("memoDetail", { id: item.id });
      }}
    >
      <View style={styles.memoTitle}>
        <Text style={styles.memoTitleText}>{item.title}</Text>
        <Text>{item.createdAt}</Text>
      </View>
      <Text>{item.content}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📝내메모</Text>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="메모 검색..."
            style={styles.textInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => setKeyword(searchText)}
          >
            <Ionicons name="search" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        <Text style={styles.memoCnt}>총 {memos.length}개의 메모</Text>
      </View>
      <FlatList
        data={filteredMemos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10, padding: 20 }}
      />
      {/* 플로팅 버튼 */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          navigation.navigate("memoForm");
        }}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MemoListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    marginTop: 10,
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
  },
  memoTitleText: { fontSize: 16, fontWeight: "600" },
  searchBtn: {
    padding: 8,
  },
  memoCnt: {
    color: "#333",
  },
  memoBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },

  memoTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  // 플로팅 버튼 스타일
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#4A90D9",
    justifyContent: "center",
    alignItems: "center",
    // 그림자 (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // 그림자 (Android)
    elevation: 8,
  },
  fabText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "300",
    marginTop: -2, // 시각적 중앙 보정
  },
});
