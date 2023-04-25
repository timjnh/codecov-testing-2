import { addNumbers, subtractNumbers, multiplyNumbers } from "./numbers.js";

describe('addNumbers', () => {
  test("it should add two numbers together", () => {
    expect(addNumbers(1, 2)).toBe(3);
  });
});

describe('subtractNumbers', () => {
  test("it should subtract two numbers", () => {
    expect(subtractNumbers(3, 2)).toBe(1);
  });
});

describe('multiplyNumbers', () => {
  test("it should multiply two numbers", () => {
    expect(multiplyNumbers(3, 2)).toBe(6);
  });
});