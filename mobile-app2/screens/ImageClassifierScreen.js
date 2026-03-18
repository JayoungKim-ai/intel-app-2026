import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
export default function ImageClassifier() {
  // 상태 관리
  const [imageUri, setImageUri] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 이미지 분류 요청 함수//////////////////////////////
  const classifyImage = async (uri) => {
    console.log("이미지분류요청", uri);
    const SERVER_URL = "http://10.33.140.83:8000/classify";
    // 파일 확장자에서 MIME 추출
    const extension = uri.split(".").pop().toLowerCase();
    const types = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      webp: "image/webp",
      heic: "image/heic",
      heif: "image/heif",
    };
    const fileType = types[extension] || "image/jpeg";

    // FormData 생성
    const formData = new FormData();

    // 이미지 파일을 "file"이라는 키로 추가
    formData.append("file", {
      uri: Platform.OS === "ios" ? uri.replace("file://", "") : uri,
      type: fileType,
      name: `photo.${extension}`,
    });
    // 이미지 분류 요청
    const response = await fetch(SERVER_URL, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log("응답결과", data.predictions);
    setResult(data.predictions);
  };
  const handlePickImage = async () => {
    console.log("이미지 선택");
    // 1. 갤러리 접근 권한
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log("status==>", status);
    if (status === "denied") {
      Alert.alert(
        "권한 필요",
        "갤러리 접근 권한이 필요합니다. 설정에서 허용해주세요.",
        [
          { text: "취소" },
          { text: "설정으로 이동", onPress: () => Linking.openSettings() },
        ],
      );
      return;
    }

    try {
      // 2. 이미지 선택창 열기
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"], // 이미지 파일만 허용
        allowsEditing: true, // 사진 선택 후 편집(자르기) 허용
        aspect: [1, 1], // 자르기 비율
        quality: 1, // 이미지 품질
      });
      console.log("result===>", result); // 이미지 선택, 선택 취소 시 result 관찰
      // 3. useState에 이미지 경로 저장
      if (!result.canceled) {
        console.log(result.assets[0].uri); // 선택된 이미지 경로
        setImageUri(result.assets[0].uri);
        classifyImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCamera = async () => {
    console.log("카메라 촬영");
    // 1. 카메라 접근 권한
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log("status==>", status);

    try {
      // 2. 카메라 촬영
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        quality: 1,
      });
      console.log("result===>", result); // 이미지 선택, 선택 취소 시 result 관찰
      // 3. useState에 이미지 경로 저장
      if (!result.canceled) {
        console.log(result.assets[0].uri); // 선택된 이미지 경로
        setImageUri(result.assets[0].uri);
        classifyImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // jsx
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📸 이미지 분류 앱</Text>

      {/* 이미지 영역 */}
      <View style={[styles.imageContainer, imageUri && styles.imageSelected]}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholderContent}>
            <Text style={styles.placeholderIcon}>🖼️</Text>
            <Text style={styles.placeholderText}>이미지를 선택하세요</Text>
          </View>
        )}
      </View>

      {/* 버튼 */}
      <TouchableOpacity style={styles.button} onPress={handlePickImage}>
        <Text style={styles.buttonText}>갤러리에서 선택</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCamera}>
        <Text style={styles.buttonText}>카메라 촬영</Text>
      </TouchableOpacity>

      {/* 결과 영역 */}
      <View style={styles.resultContainer}>
        {loading ? (
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>분석 중...</Text>
          </View>
        ) : result ? (
          <>
            <Text style={styles.resultTitle}>🔍 분류 결과</Text>
            {result.map((item, idx) => (
              <View key={idx} style={styles.resultItem}>
                <View style={styles.resultLabelRow}>
                  <Text style={styles.rankBadge}>{idx + 1}</Text>
                  <Text style={styles.resultLabel}>{item.label}</Text>
                  <Text style={styles.resultProb}>{item.probability}%</Text>
                </View>
                {/* 확률 바 */}
                <View style={styles.barBackground}>
                  <View
                    style={[
                      styles.barFill,
                      {
                        width: `${item.probability}%`,
                        backgroundColor:
                          idx === 0
                            ? "#007AFF"
                            : idx === 1
                              ? "#34C759"
                              : "#A0A0A0",
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </>
        ) : (
          <Text style={styles.emptyResultText}>
            이미지를 선택하면 분류 결과가 여기에 표시됩니다
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 24,
  },

  // 이미지 영역
  imageContainer: {
    width: 260,
    height: 260,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageSelected: {
    borderStyle: "solid",
    borderColor: "#007AFF",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholderContent: {
    alignItems: "center",
    gap: 8,
  },
  placeholderIcon: {
    fontSize: 40,
  },
  placeholderText: {
    color: "#999",
    fontSize: 15,
  },

  // 버튼
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  // 결과 영역
  resultContainer: {
    width: "100%",
    minHeight: 160,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 16,
  },
  resultItem: {
    marginBottom: 12,
  },
  resultLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  rankBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#F0F0F0",
    textAlign: "center",
    lineHeight: 22,
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    marginRight: 8,
    overflow: "hidden",
  },
  resultLabel: {
    flex: 1,
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
  resultProb: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007AFF",
  },
  barBackground: {
    height: 6,
    backgroundColor: "#F0F0F0",
    borderRadius: 3,
    marginLeft: 30,
  },
  barFill: {
    height: 6,
    borderRadius: 3,
  },

  // 로딩
  loadingContent: {
    alignItems: "center",
    gap: 12,
  },
  loadingText: {
    fontSize: 15,
    color: "#666",
  },

  // 빈 상태
  emptyResultText: {
    textAlign: "center",
    color: "#BBB",
    fontSize: 14,
    lineHeight: 20,
  },
});
