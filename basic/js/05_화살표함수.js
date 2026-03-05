// function greet(name, greeting = "안녕하세요") {
//   return `${greeting}, ${name}님!`;
// }
const greet_arrow = (text = "홍길동", hi = "안녕하세요") => `${hi}, ${text}님!`;

console.log(greet_arrow((hi = "반갑습니다"))); // 반갑습니다, 김철수님!
