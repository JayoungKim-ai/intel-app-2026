import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const FlatListExampleScreen = () => {
  const fruitData = [
    { id: "1", name: "사과", emoji: "🍎", color: "#ffebee" },
    { id: "2", name: "바나나", emoji: "🍌", color: "#fffde7" },
    { id: "3", name: "오렌지", emoji: "🍊", color: "#fff3e0" },
    { id: "4", name: "포도", emoji: "🍇", color: "#f3e5f5" },
    { id: "5", name: "수박", emoji: "🍉", color: "#ffebee" },
    { id: "6", name: "딸기", emoji: "🍓", color: "#fce4ec" },
    { id: "7", name: "복숭아", emoji: "🍑", color: "#fff8e1" },
    { id: "8", name: "체리", emoji: "🍒", color: "#ffebee" },
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: item.color,
        flex: 1,
        height: 30,
      }}
    >
      <Text>{item.emoji}</Text>
      <Text>{item.name}</Text>
    </View>
  );
  const renderHeader = () => (
    <View style={{ backgroundColor: "tomato", height: 50 }}>
      <Text style={{ fontSize: 24 }}>과일목록</Text>
    </View>
  );
  const renderFooter = () => (
    <View>
      <Text>모두 불러왔습니다.</Text>
    </View>
  );
  const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "#000" }}></View>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={fruitData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={{ padding: 10 }}
        style={{
          backgroundColor: "#000",
          borderWidth: 2,
          borderColor: "#ff0000",
          borderRadius: 20,
        }}
        numColumns={3}
        key={3}
      />
    </SafeAreaView>
  );
};

export default FlatListExampleScreen;

const styles = StyleSheet.create({});
