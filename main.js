let user = 'John Doe';
console.log(user);
const student = 'Tonya Kolb';
console.log(student);
user = student; // in the variable user will be value of student
console.log(user);

let test = 1;
test += 1;
test = test + '1'; // will be 21
console.log(test);
test = test - 1; // will be 20
console.log(test);
const test2 = Boolean(test);
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

const array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.round(Math.random() * 100));
}
console.log(array);

function transform(array1) {
  if (`${array1}`.includes('0')) {
    return `${array1}`.replaceAll('0', 'zero').split(',');
  } else {
    return array1;
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

const c = 5;
const d = 17;
const minEl = c > d ? d : c;
console.log(minEl);
const maxEl = c > d ? c : d;
console.log(maxEl);

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome('anna'));

// task 1
function changeDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString();
}
console.log(changeDate('2021-10-15'));

// task 2
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(val) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const current = data[i];
    for (const key in current) {
      if (current[key] === val) {
        result.push(current);
      }
    }
  }
  return result;
}
console.log(search('Berlin'));
