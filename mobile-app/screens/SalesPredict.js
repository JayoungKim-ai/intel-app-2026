import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const SalesPredict = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.inputArea}>
          <Text style={styles.title}>판매량 예측</Text>
          <View style={styles.bar}></View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>📺 TV 광고비 : </Text>
            <TextInput style={styles.inputBox} />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>📻 Radio 광고비 : </Text>
            <TextInput style={styles.inputBox} />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>📰 Newspaper 광고비 : </Text>
            <TextInput style={styles.inputBox} />
          </View>
        </View>
        <Text style={styles.button}>예측하기</Text>
        <View style={styles.outputArea}>
          <Text style={styles.outputLabel}>예상 판매량</Text>
          <Text style={styles.output}>0</Text>
        </View>
      </View>
    </View>
  );
};

export default SalesPredict;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#532db3",
    paddingTop: 100,
    flex: 1,
  },
  body: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  inputArea: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 10,
  },
  bar: {
    height: 3,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  inputLabel: {
    fontSize: 18,
    width: 190,
  },
  inputBox: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    width: 150,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#532db3",
    marginHorizontal: "10",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    color: "#fff",
    borderRadius: 10,
  },
  outputArea: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 30,
    paddingVertical: 50,
  },
  outputLabel: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  output: {
    fontSize: 50,
    textAlign: "center",
  },
});
