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

function changeDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleString();
}
console.log(changeDate('2021-10-15'));

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

function search(stringForSearch) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const current = data[i];

    for (const key in current) {
      if (current[key] === stringForSearch) {
        result.push(current);
      }
    }
  }
  return result;
}
console.log(search('Berlin'));

const isPalindrome = (str) => str === str.split('').reverse().join('');
console.log(isPalindrome('madam'));

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];
function searchForHotels(stringForSearch) {
  const arrHotel = [];

  hotels.forEach((element) => {
    for (const x in element) {
      if (element[x].includes(stringForSearch)) {
        let result = '';
        for (const s in element) {
          result += element[s] + ',' + ' ';
        }
        result = result.slice(0, -2) + ';';
        arrHotel.push(result);
      }
    }
  });
  return arrHotel;
}
console.log(searchForHotels('Berlin'));

function getUniqueCountriesAndCities() {
  const objCountriesAndCities = {};

  hotels.forEach((element) => {
    if (!Object.prototype.hasOwnProperty.call(objCountriesAndCities, element.country)) {
      objCountriesAndCities[element.country] = [];
      objCountriesAndCities[element.country].push(element.city);
    } else {
      if (!objCountriesAndCities[element.country].includes(element.city)) {
        objCountriesAndCities[element.country].push(element.city);
      }
    }
  });
  return objCountriesAndCities;
}
console.log(getUniqueCountriesAndCities());

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  if (typeof object1 === typeof object2) {
    if (typeof object1 == 'object' && object1 != null) {
      let equals = true;

      for (const property in object1) {
        if (
          Object.prototype.hasOwnProperty.call(object1, property) &&
          Object.prototype.hasOwnProperty.call(object2, property)
        ) {
          if (!deepEqual(object1[property], object2[property])) {
            equals = false;
          }
        } else {
          equals = false;
        }
      }
      return equals;
    } else {
      return object1 === object2;
    }
  } else {
    return false;
  }
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual(obj2, obj3)); // false

// task classes

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}
console.log(Student);

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class Students {
  constructor(array) {
    this.array = array;
  }
  course(student) {
    return new Date().getFullYear() - student.admissionYear;
  }
  fullName(student) {
    return `${student.firstName} ${student.lastName}`;
  }
}

Students.prototype.getInfo = function () {
  const newArray = [];
  this.array.sort((a, b) =>
    this.course(a) > this.course(b)
      ? 1
      : this.course(a) === this.course(b)
      ? this.fullName(a) > this.fullName(b)
        ? 1
        : -1
      : -1
  );
  this.array.forEach((student) => {
    const string =
      this.fullName(student) + ' - ' + student.courseName + ', ' + this.course(student) + ' курс';
    newArray.push(string);
  });
  return newArray;
};

const students = new Students(studentsData);
console.log(students.getInfo());
