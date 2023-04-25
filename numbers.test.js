import { addNumbers } from "./numbers.js";

describe('addNumbers', () => {
  test("it should add two numbers together", () => {
    expect(addNumbers(1, 2)).toBe(3);
  });
});