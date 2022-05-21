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

test('first click - color magenta', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color = text[i].style.color;
    expect(color).toBe('magenta');
  }
});

test('second click - color cyan', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color = text[i].style.color;
    expect(color).toBe('cyan');
  }
});

test('third click - color firebrick', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color = text[i].style.color;
    expect(color).toBe('firebrick');
  }
});

test('fourth click - color springgreen', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color = text[i].style.color;
    expect(color).toBe('springgreen');
  }
});

test('fifth click - color skyblue', async () => {
  for (let i = 0; i < text.length; i++) {
    text[i].click();
    changeColor(text[i]);
    const color = text[i].style.color;
    expect(color).toBe('skyblue');
  }
});
