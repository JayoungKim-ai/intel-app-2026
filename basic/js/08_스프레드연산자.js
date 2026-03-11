const original = [1, 2, 3];
const copy = [...original];

console.log(original);
console.log(copy);

copy.push(4);
console.log(original);
console.log(copy);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = [...arr3, 10];
console.log(arr4);

//-------------------
const original2 = { name: "홍길동", age: 25 };
const copy2 = { ...original2 };
copy2.age = 26;
console.log(copy2);
console.log(original2);

const info = { name: "홍길동" };
const details = { age: 25, city: "서울" };
const merged = { ...info, ...details, age: 26 };
console.log(merged);
