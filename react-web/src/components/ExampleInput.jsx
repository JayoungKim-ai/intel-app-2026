import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function ExampleInput() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  // 비밀번호 유효성 검사
  // 8자리 이상
  // 알파벳/숫자/특수문자 각각 1자 이상씩 필수 포함되어야 함.
  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    );
  };
  console.log(password);
  return (
    <>
      <div>
        <label htmlFor="userid">ID(8자까지만 입력 가능)</label>
        <input
          type="text"
          name="userid"
          id="userid"
          onChange={(e) => {
            const LIMIT = 8;
            const value = e.target.value;
            if (value.length <= LIMIT) {
              setUserId(value.toUpperCase());
            }
          }}
          value={userid}
        />
        <button
          className="bg-gray-300"
          onClick={() => {
            setUserId("");
          }}
        >
          초기화
        </button>
      </div>
      <div>
        {userid}({userid.length})
      </div>
      <div className="flex items-center">
        <label htmlFor="password">비밀번호:</label>
        <input
          type={type}
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {type === "password" ? (
          <EyeOff
            size={30}
            className="m-3"
            onClick={() => {
              setType("text");
            }}
          />
        ) : (
          <Eye
            size={30}
            className="m-3"
            onClick={() => {
              setType("password");
            }}
          />
        )}
      </div>
      <div>
        {password.length > 0 &&
          (validatePassword(password)
            ? "올바른 비밀번호입니다."
            : "비밀번호가 유효하지 않습니다.")}
        {console.log()}
      </div>
    </>
  );
}

export default ExampleInput;
