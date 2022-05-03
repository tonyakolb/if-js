let user = "John Doe";
console.log(user);
let student = "Tonya Kolb";
console.log(student);
user = student; // в переменной user будет значение student
console.log(user);

let test = 1;
test += 1;
test = test + "1"; // будет 21
console.log(test);
test = test - 1; // 20
console.log(test);
let test2 = Boolean(test);
console.log(test2);

let result = 1;
const arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
console.log(result);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < 10 && arr2[i] > 5) {
    console.log(arr2[i]);
  }
}

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}
