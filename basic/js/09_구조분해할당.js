const user = {
  name: "김철수",
  age: 30,
  email: "kim@example.com",
  job: "개발자",
  // phone: "010-1234-5678",
};

function printUser({ name, age }) {
  console.log(name, age);
}

printUser(user);

const { name, age, phone = "없음" } = user;
console.log(name, age, phone);

// 배열의 구조분해
const colors = ["red", "green", "blue"];
const [c1, c2, c3] = colors;
console.log(c1, c2, c3);

const person = { name: "홍길동", age: 30, city: "서울" };

const { name, city } = person;

console.log(name); //홍길동
console.log(city); //서울

//
const user = { name: "Tom", age: 20, city: "Seoul" };

// 여기에 함수 작성
const printUser = ({ name, age }) => {
  console.log(`이름:${name}, 나이:${age}`);
};
printUser(user);
// 함수 호출 예시: printUser(user);
// 출력: "이름: Tom, 나이: 20"

const arr = [3, 7, 10];

// 여기에 함수 작성
const sumFirstTwo = ([first, second]) => {
  return first + second;
};

console.log(sumFirstTwo(arr));

// 함수 호출 예시: sumFirstTwo(arr);
// 결과: 10
