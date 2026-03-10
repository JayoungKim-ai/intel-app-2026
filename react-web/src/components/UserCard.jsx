import React from "react";
import { FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

// UserCard 컴포넌트는 name과 userInfo를 props로 받음
function UserCard() {
  const name = "김철수";
  const userInfo = {
    age: 20,
    school: "한국대학교",
    hobby: ["운동", "독서", "글쓰기"],
    isMember: true,
    github: "https://github.com/username",
    email: "abc@naver.com",
  };
  return (
    <div className="bg-blue-100 w-100 p-10 rounded-lg m-5 hover:bg-blue-200">
      <div className="text-blue-600 font-bold">이름:{name}</div>
      <div className="border border-blue-500 text-white">
        나이:{userInfo.age}
      </div>
      <div>학교:{userInfo.school}</div>
      <div className="flex items-center gap-2">
        <FaGithub />
        {userInfo.github}
      </div>
      <div className="flex items-center gap-2">
        <Mail />
        {userInfo.email}
      </div>
      <div>취미:{userInfo.hobby.join(", ")}</div>
      <div>회원여부:{userInfo.isMember ? "Y" : "N"}</div>
      {/* 회원이 아니면 회원가입 버튼이 보이게 */}
      {!userInfo.isMember && <button>회원가입</button>}
      <h3 className="text-3xl font-bold underline">취미</h3>
      <ul className="flex gap-2">
        {userInfo.hobby.map((h, i) => (
          <li className="bg-blue-500 text-white rounded px-2" key={i}>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
