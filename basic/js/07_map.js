const numbers = [1, 2, 3, 4, 5]; //각 요소값이 2배인 새로운 배열을 만들고 싶다
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

// 객체 배열 다루기  ["<p>철수(25)</p>", "<p>영희(30)</p>", "<p>민수(28)</p>"]
const users = [
  { id: 1, name: "철수", age: 25 },
  { id: 2, name: "영희", age: 30 },
  { id: 3, name: "민수", age: 28 },
];

const users_tag = users.map((user) => `<p>${user.name}(${user.age})</p>`);
console.log(users_tag);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//짝수만 필터링
const evens = numbers2.filter((n) => n % 2 === 0);
console.log(evens);
