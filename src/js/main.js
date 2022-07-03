const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const content = document.getElementById('content');

data.forEach((item) => {
  content.innerHTML += `
              <div class="picture">
                  <img class="apartment-photo mini-picture" src="${item.imageUrl}" alt="${item.name}">
                  <span class="hotel-name">${item.name}</span>
                  <span class="hotel-location">${item.city}, ${item.country}</span>
              </div>
      `;
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

function viewDiv() {
  document.getElementById('consist-form').style.display = 'block';
}
viewDiv()

function viewSelect() {
  document.getElementById('age-selector').style.display = 'block';
}
viewSelect()

const plusButtonRooms = document.getElementById('button-plus-rooms');
const minusButtonRooms = document.getElementById('button-minus-rooms');
const numberRooms = document.getElementById('number-rooms');
const spanNumberRooms = document.getElementById('span-number-rooms');

plusButtonRooms.onclick = function () {
  numberRooms.textContent = (parseInt(numberRooms.textContent) + 1).toString();
  spanNumberRooms.textContent = (parseInt(spanNumberRooms.textContent) + 1).toString();
  return false;
};

minusButtonRooms.onclick = function () {
  numberRooms.textContent = (parseInt(numberRooms.textContent) - 1).toString();
  spanNumberRooms.textContent = (parseInt(spanNumberRooms.textContent) - 1).toString();
  return false;
};

const plusButtonChild = document.getElementById('button-plus-сhildren');
const minusButtonChild = document.getElementById('button-minus-сhildren');
const numberChild = document.getElementById('number-children');
const spanNumberChildren = document.getElementById('span-number-children');

plusButtonChild.onclick = function () {
  numberChild.textContent = (parseInt(numberChild.textContent) + 1).toString();
  spanNumberChildren.textContent = (parseInt(spanNumberChildren.textContent) + 1).toString();
  return false;
};

minusButtonChild.onclick = function () {
  numberChild.textContent = (parseInt(numberChild.textContent) - 1).toString();
  spanNumberChildren.textContent = (parseInt(spanNumberChildren.textContent) - 1).toString();
  return false;
};

const plusButtonAdult = document.getElementById('button-plus-adult');
const minusButtonAdult = document.getElementById('button-minus-adult');
const numberAdult = document.getElementById('number-adult');
const spanNumberAdults = document.getElementById('span-number-adults');

plusButtonAdult.onclick = function () {
  numberAdult.textContent = (parseInt(numberAdult.textContent) + 1).toString();
  spanNumberAdults.textContent = (parseInt(spanNumberAdults.textContent) + 1).toString();
  return false;
};

minusButtonAdult.onclick = function () {
  numberAdult.textContent = (parseInt(numberAdult.textContent) - 1).toString();
  spanNumberAdults.textContent = (parseInt(spanNumberAdults.textContent) - 1).toString();
  return false;
};
