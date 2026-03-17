import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

////////////////////////////////
// 프로필카드 앱버전
// 1. 이름, 전화번호, 이메일주소, 사진 넣기
// 2. 컴포넌트 사용 : Text, View, Image, TouchableOpacity, Linking
////////////////////////////////

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://api.dicebear.com/9.x/adventurer/png?seed=김철수&backgroundColor=dbeafe",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>이름:</Text>
        <Text style={styles.value}>김철수</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("tel:123-456-7890");
        }}
      >
        <View style={styles.rowContainer}>
          <Text style={styles.label}>전화번호: </Text>
          <Text style={styles.value}>010-123-4567</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>이메일주소:</Text>
        <Text style={styles.value}>abc@naver.com</Text>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: { flexDirection: "row", marginVertical: 20 },
  label: { fontSize: 24 },
  value: { fontSize: 24 },
});
