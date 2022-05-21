// task 2
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text = document.getElementsByTagName('p');

for (let i = 0; i < text.length; i++) {
  text[i].addEventListener('click', changeColor());
}

function changeColor() {
  let color = 0;

  return function () {
    this.style.color = colors[color];
    color++;

    if (color === colors.length) {
      color = 0;
    }
  };
}
module.exports = changeColor();

test('first click - color magenta', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color2 = text[i].style.color;
    expect(color2).toBe('magenta');
  }
});

test('second click - color cyan', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color2 = text[i].style.color;
    expect(color2).toBe('cyan');
  }
});

test('third click - color firebrick', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color2 = text[i].style.color;
    expect(color2).toBe('firebrick');
  }
});

test('fourth click - color springgreen', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color2 = text[i].style.color;
    expect(color2).toBe('springgreen');
  }
});

test('fifth click - color skyblue', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color2 = text[i].style.color;
    expect(color2).toBe('skyblue');
  }
});
