let user = "John Doe";
console.log(user);
let student = "Tonya Kolb";
console.log(student);
user = student; // in the variable user will be value of student
console.log(user);

let test = 1;
test += 1;
test = test + "1"; // will be 21
console.log(test);
test = test - 1; // will be 20
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

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.round(Math.random() * 100));
}
console.log(array);

function transform(number) {
  if (`${number}`.includes("0")) {
    return `${number}`.replaceAll("0", "zero");
  } else {
    return number;
  }
}
console.log(transform(array));

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(5, 17));

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(5, 17));

let c = 5;
let d = 17;
let minEl = c > d ? d : c;
console.log(minEl);
let maxEl = c > d ? c : d;
console.log(maxEl);

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("anna"));
