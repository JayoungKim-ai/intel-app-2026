# sales/predict.py
# 광고 매출 예측 ONNX 모델 로드 및 예측

import onnxruntime as ort
import numpy as np
import os

# 전역 변수 (서버 시작 시 한 번만 로드)
_session = None

_model_dir = os.path.dirname(__file__)
_model_path = os.path.join(_model_dir, "sales.onnx")


def load_model():
    """ONNX 모델 로드 (싱글톤 패턴)"""
    global _session

    if _session is None:
        if not os.path.exists(_model_path):
            raise FileNotFoundError(
                f"모델 파일이 없습니다: {_model_path}\n"
                "먼저 python advertising_onnx.py 를 실행하세요."
            )

        print("🔄 광고 매출 예측 모델 로딩 중...")
        _session = ort.InferenceSession(_model_path)
        print("✅ 모델 로딩 완료!")

    return _session


def predict(tv: float, radio: float, newspaper: float):
    """
    광고비로 매출 예측

    Args:
        tv: TV 광고비
        radio: 라디오 광고비
        newspaper: 신문 광고비

    Returns:
        dict: 예측 매출 결과
    """
    session = load_model()

    input_data = np.array([[tv, radio, newspaper]], dtype=np.float32)

    input_name = session.get_inputs()[0].name
    result = session.run(None, {input_name: input_data})

    predicted_sales = float(result[0].flatten()[0])

    return {
        "input": {
            "tv": tv,
            "radio": radio,
            "newspaper": newspaper
        },
        "predicted_sales": round(predicted_sales, 2)
    }