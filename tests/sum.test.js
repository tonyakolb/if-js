const sum = function (x) {
  return function (y) {
    return x + y;
  };
};
console.log(sum(5)(2));

test('adds 5 + 2 to equal 7', () => {
  expect(sum(5)(2)).toBe(7);
});
