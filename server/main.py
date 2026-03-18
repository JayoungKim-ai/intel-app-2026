from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

# === sales를 위한 import 추가 ===
from pydantic import BaseModel
from sales.predict import predict as sales_predict

# === mobilenet을 위한 import 추가 ===
from fastapi import UploadFile, File
from mobilenet.processing import preprocess_image
from mobilenet.predict import predict

# # === festivals를 위한 import 추가 ===
# import httpx
# import os                         # 환경변수 접근을 위한 모듈
# from dotenv import load_dotenv    # .env 파일 로딩 라이브러리
# load_dotenv()   

# ──────────────────────────────────────────────
# 1) FastAPI 앱 인스턴스 생성
# ──────────────────────────────────────────────
# FastAPI() 를 호출하면 웹 애플리케이션 객체가 만들어집니다.
# 이 app 객체에 API 경로(라우트)를 등록하고, 서버를 실행합니다
app = FastAPI()

# ──────────────────────────────────────────────
# 2) CORS 설정
# ──────────────────────────────────────────────
# CORS(Cross-Origin Resource Sharing)란?
# → 브라우저의 보안 정책으로, 다른 출처(도메인, 포트)에서 오는 요청을 기본적으로 차단합니다.
# → React(포트 5173)에서 FastAPI(포트 8000)로 요청하면 "출처가 다르다"고 판단하여 차단됩니다.
# → 이 설정을 통해 특정 프론트엔드 주소에서 오는 요청을 허용합니다.



# 허용할 프론트엔드 주소 목록
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,           # 위에서 지정한 주소만 허용
    allow_credentials=False,
    allow_methods=["*"],             # 모든 HTTP 메서드(GET, POST 등) 허용
    allow_headers=["*"],             # 모든 헤더 허용
)

# ──────────────────────────────────────────────
# 3) API 엔드포인트(라우트) 정의
# ──────────────────────────────────────────────
# "/" 경로로 GET 요청이 들어오면 아래 함수를 실행
@app.get("/")
def home():
    return {"message":"여기는 home입니다"}

@app.get("/about")
def about():
    return {"name":"김철수", 
            "phone":"010-123-4567",
            "email":"abc@naver.com"}

# 랜덤 동물 캐릭터 만들기
@app.get("/animal")
def random_animal():
    import random
    claracteristics = ["귀여운", "용감한", "느긋한", "쏘~쿨한"]
    animals = ["고양이", "쿼카", "햄스터"]
    return {"claracteristics":random.choice(claracteristics),
            "animal":random.choice(animals)}

# === 요청 데이터 모델 ===
class AdvertisingInput(BaseModel):
    tv: float
    radio: float
    newspaper: float
    

# === API 엔드포인트 ===
@app.post("/predict_sales")
def predict_sales(data: AdvertisingInput):
    print("predict_sales 엔드포인트 도착")
    """
    광고비를 입력받아 매출을 예측합니다.
 
    - **tv**: TV 광고비
    - **radio**: 라디오 광고비
    - **newspaper**: 신문 광고비
    """
    result = sales_predict(data.tv, data.radio, data.newspaper)
    print("result===?", result)
    return {
        "success": True,
        **result
    }


@app.post("/classify")
async def classify_image(file: UploadFile = File(...)):
    """
    이미지를 받아서 분류 결과 반환
    
    - **file**: 분류할 이미지 파일 (jpg, png 등)
    
    Returns:
        - predictions: 상위 5개 분류 결과
    """
    # 1. 이미지 읽기
    image_bytes = await file.read()
    
    # 2. 전처리 (preprocessing.py)
    processed_image = preprocess_image(image_bytes)
    
    # 3. 예측 (predict.py)
    results = predict(processed_image)
    
    return {
        "success": True,
        "predictions": results
    }




# # 축제데이터
# @app.get("/festivals")
# def get_festivals(pageNo: str = Query(default='1')):
    
#     service_key = os.getenv("FESTIVAL_SERVICE_KEY")
#     url = 'http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api'

#     params ={'serviceKey' : service_key, 
#             'pageNo' : pageNo,
#             'numOfRows' : '100',
#             'type' : 'json'}        

#     response = httpx.get(url, params=params, timeout=10)

#     data = response.json()
#     items = data['response']['body']['items']    

#     return items

