// const data = [
//   {
//     id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
//   },
//   {
//     id: 'aa560608-a879-48a7-80b6-deff2806b250',
//     name: 'Apartment Sunshine',
//     city: 'Santa  Cruz de Tenerife',
//     country: 'Spain',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
//   },
//   {
//     id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
//   },
//   {
//     id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
//   },
//   {
//     id: '4024535d-a498-4274-b7cb-f01ada962971',
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
//   },
//   {
//     id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
//   },
//   {
//     id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
//   },
//   {
//     id: '190221c6-b18f-4dba-97de-e35f0e14c023',
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//     imageUrl:
//       'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
//   },
// ];

const content = document.getElementById('content');

// data.forEach((item) => {
//   content.innerHTML += `
//               <div class="picture">
//                   <img class="apartment-photo mini-picture" src="${item.imageUrl}" alt="${item.name}">
//                   <span class="hotel-name">${item.name}</span>
//                   <span class="hotel-location">${item.city}, ${item.country}</span>
//               </div>
//       `;
// });

fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => response.json())
  .then((result) => {
    result.forEach((item) => {
      content.innerHTML += `
              <div class="picture">
                  <img class="photo mini-picture" src="${item.imageUrl}" alt="${item.name}">
                  <span class="hotel-name">${item.name}</span>
                  <span class="hotel-location">${item.city}, ${item.country}</span>
              </div>
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.pictures').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

// eslint-disable-next-line no-unused-vars
function toggle() {
  const el = document.getElementById('consist-form');
  el.style.display = el.style.display === 'none' ? '' : 'none';
}

const plusButtonRooms = document.getElementById('button-plus-rooms');
const minusButtonRooms = document.getElementById('button-minus-rooms');
const numberRooms = document.getElementById('number-rooms');
const spanNumberRooms = document.getElementById('span-number-rooms');

plusButtonRooms.onclick = function () {
  if (parseInt(numberRooms.textContent) < 30) {
    numberRooms.textContent = (parseInt(numberRooms.textContent) + 1).toString();
    spanNumberRooms.textContent = (parseInt(spanNumberRooms.textContent) + 1).toString();
    if (minusButtonRooms.hasAttribute('disabled')) {
      minusButtonRooms.removeAttribute('disabled');
    }
  }
  if (parseInt(numberChild.textContent) === 30) {
    plusButtonRooms.setAttribute('disabled', 'disabled');
  }
  return false;
};

minusButtonRooms.onclick = function () {
  if (parseInt(numberRooms.textContent) > 1) {
    numberRooms.textContent = (parseInt(numberRooms.textContent) - 1).toString();
    spanNumberRooms.textContent = (parseInt(spanNumberRooms.textContent) - 1).toString();
    if (plusButtonRooms.hasAttribute('disabled')) {
      plusButtonRooms.removeAttribute('disabled');
    }
  }
  if (parseInt(numberChild.textContent) === 1) {
    minusButtonRooms.setAttribute('disabled', 'disabled');
  }
  return false;
};

const plusButtonChild = document.getElementById('button-plus-child');
const minusButtonChild = document.getElementById('button-minus-child');
const numberChild = document.getElementById('number-child');
const spanNumberChild = document.getElementById('span-number-child');

plusButtonChild.onclick = function () {
  if (parseInt(numberChild.textContent) < 10) {
    numberChild.textContent = (parseInt(numberChild.textContent) + 1).toString();
    spanNumberChild.textContent = (parseInt(spanNumberChild.textContent) + 1).toString();
    if (minusButtonChild.hasAttribute('disabled')) {
      minusButtonChild.removeAttribute('disabled');
    }
  }
  if (parseInt(numberChild.textContent) === 10) {
    plusButtonChild.setAttribute('disabled', 'disabled');
  }
  return false;
};

minusButtonChild.onclick = function () {
  if (parseInt(numberChild.textContent) > 0) {
    numberChild.textContent = (parseInt(numberChild.textContent) - 1).toString();
    spanNumberChild.textContent = (parseInt(spanNumberChild.textContent) - 1).toString();
    if (plusButtonChild.hasAttribute('disabled')) {
      plusButtonChild.removeAttribute('disabled');
    }
  }
  if (parseInt(numberChild.textContent) === 0) {
    minusButtonChild.setAttribute('disabled', 'disabled');
  }
  return false;
};

const plusButtonAdult = document.getElementById('button-plus-adult');
const minusButtonAdult = document.getElementById('button-minus-adult');
const numberAdult = document.getElementById('number-adult');
const spanNumberAdult = document.getElementById('span-number-adults');

plusButtonAdult.onclick = function () {
  if (parseInt(numberAdult.textContent) < 30) {
    numberAdult.textContent = (parseInt(numberAdult.textContent) + 1).toString();
    spanNumberAdult.textContent = (parseInt(spanNumberAdult.textContent) + 1).toString();
    if (minusButtonAdult.hasAttribute('disabled')) {
      minusButtonAdult.removeAttribute('disabled');
    }
  }
  if (parseInt(numberChild.textContent) === 30) {
    plusButtonAdult.setAttribute('disabled', 'disabled');
  }
  return false;
};

minusButtonAdult.onclick = function () {
  if (parseInt(numberAdult.textContent) > 1) {
    numberAdult.textContent = (parseInt(numberAdult.textContent) - 1).toString();
    spanNumberAdult.textContent = (parseInt(spanNumberAdult.textContent) - 1).toString();
    if (plusButtonAdult.hasAttribute('disabled')) {
      plusButtonAdult.removeAttribute('disabled');
    }
  }
  if (parseInt(numberChild.textContent) === 1) {
    minusButtonAdult.setAttribute('disabled', 'disabled');
  }
  return false;
};

plusButtonChild.addEventListener(
  'click',
  () => {
    const el = document.getElementById('age-question');
    if (el.style.display === 'none') {
      el.style.display = '';
    }
  },
  { once: true }
);

plusButtonChild.addEventListener('click', () => {
  const parent = document.getElementById('age-selector');
  const el = document.getElementById('kids-age');
  const deepCopy = el.cloneNode(true);

  if (el.style.display === 'none') {
    el.style.display = '';
  } else {
    parent.insertAdjacentElement('beforeend', deepCopy);
  }
});

minusButtonChild.addEventListener('click', () => {
  const parent = document.getElementById('age-selector');
  const question = document.getElementById('age-question');
  const el = document.getElementById('kids-age');
  while (parseInt(numberChild.textContent) > 0) {
    parent.removeChild(el);
  }

  el.style.display = 'none';
  question.style.display = 'none';
  plusButtonChild.addEventListener(
    'click',
    () => {
      const el = document.getElementById('age-question');
      if (el.style.display === 'none') {
        el.style.display = '';
      }
    },
    { once: true }
  );
});
