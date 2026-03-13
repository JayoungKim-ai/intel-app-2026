import React from "react";
import { useState, useEffect } from "react";

function Cat() {
  // 고양이 사진 데이터 state
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(loading);

  // 고양이 사진 API로 받아오기
  useEffect(() => {
    // API 주소에서 데이터를 가져옴 -> cats 상태 업데이트 -> "getData 끝"
    async function getData() {
      try {
        const url = "https://api.thecatapi.com/v1/images/search?limit=6"; // API주소
        const response = await fetch(url); // API 주소에 요청을 보냄. 응답이 올때까지 기다림
        const data = await response.json(); // 응답 객체에서 데이터만 추출. 데이터가 다 추출될 때까지 기다림
        setCats(data); // 데이터를 state에 업데이트
      } catch (e) {
        console.log("error");
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    getData(); // 시간 오래걸림, 비동기함수
  }, []);
  if (loading) {
    return <div>로딩중...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <>
        <div className="flex gap-3 flex-wrap w-300 bg-gray-300 justify-center">
          {cats.map((cat) => (
            <div key={cat.id}>
              <div>{cat.id}</div>
              <img src={cat.url} className="w-50 h-50 rounded-full " />
            </div>
          ))}
        </div>

        <div>
          <div className="bg-gray-100">{cats[0].id}</div>
          <img src={cats[0].url} />
        </div>
      </>
    );
  }
}

export default Cat;
