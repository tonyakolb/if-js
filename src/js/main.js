const content = document.getElementById('content');

if (sessionStorage.getItem('hotels') === null) {
  const oReq = new XMLHttpRequest();
  oReq.open('get', 'https://fe-student-api.herokuapp.com/api/hotels/popular', true);
  oReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      sessionStorage.setItem('hotels', JSON.stringify(data));
      data.forEach((item) => {
        content.innerHTML += `
                            <div class="picture">
                                <img class="photo mini-picture" src="${item.imageUrl}" alt="${item.name}">
                                <span class="hotel-name">${item.name}</span>
                                <span class="hotel-location">${item.city}, ${item.country}</span>
                            </div>
                    `;
      });
    }
  };

  oReq.send();
} else {
  const data = JSON.parse(sessionStorage.hotels);
  data.forEach((item) => {
    content.innerHTML += `
                <div class="picture">
                    <img class="photo mini-picture" src="${item.imageUrl}" alt="${item.name}">
                    <span class="hotel-name">${item.name}</span>
                    <span class="hotel-location">${item.city}, ${item.country}</span>
                </div>
        `;
  });
}

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

// Available hotels

const hotelsUrl = 'https://fe-student-api.herokuapp.com/api/hotels?';
const availableHotelsTitle = document.getElementById('hotels-title');
const availableHotelsBlock = document.getElementById('hotels-content');
const generateDefiniteCity = (search) => `${hotelsUrl}search=${search}`;

const getHotel = () => {
  const search = document.getElementById('destination')?.value;
  availableHotelsTitle.style.display = '';
  availableHotelsBlock.innerHTML = '';

  fetch(generateDefiniteCity(search))
    .then((response) => response.json())
    .then(function (hotels) {
      hotels.forEach((hotel) => {
        availableHotelsBlock.innerHTML += `
                       <div class="picture">
                          <img class="photo mini-picture" src="${hotel.imageUrl}" alt="${hotel.name}">
                          <span class="hotel-name">${hotel.name}</span>
                          <span class="hotel-location">${hotel.city}, ${hotel.country}</span>
                       </div> `;
      });
    })
    .catch((err) => console.log(err));
};

document.getElementById('search-hotel').addEventListener('click', getHotel);
