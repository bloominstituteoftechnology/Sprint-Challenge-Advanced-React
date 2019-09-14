const product = require('./product');

test('multiply two numbers', () => {
  expect(product(3,7)).toBe(21);
});