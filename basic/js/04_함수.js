function greet(name = "고객님", age = 999) {
  console.log(name, "안녕하세요!");
  console.log(age, "살이시군요");
  console.log("반갑습니다!");
  return true;
}

greet("김철수", 20);
const result = greet();
console.log(result);

function add(a, b) {
  return a + b;
}

const add1 = (a, b) => {
  return a + b;
};

console.log(add1(1, 2));

const add2 = (a, b) => a + b;
console.log(add2(3, 4));

//나이를 받아서 성인여부 리턴(18이상이면 성인)
function isAdult(age) {
  return age >= 18;
}

const isAdult2 = (age) => age >= 18;
