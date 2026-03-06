import React from "react";

function UserCard() {
  const name = "김철수";
  const userInfo = {
    age: 20,
    school: "한국대학교",
    hobby: ["운동", "독서", "글쓰기"],
    isMember: true,
  };
  return (
    <>
      <div>이름:{name}</div>
      <div>나이:{userInfo.age}</div>
      <div>학교:{userInfo.school}</div>
      <div>취미:{userInfo.hobby.join(", ")}</div>
      <div>회원여부:{userInfo.isMember ? "Y" : "N"}</div>
      {/* 회원이 아니면 회원가입 버튼이 보이게 */}
      {!userInfo.isMember && <button>회원가입</button>}
      <h3>취미</h3>
      <ul>
        {userInfo.hobby.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </>
  );
}

export default UserCard;
