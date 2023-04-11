const binarySearch = require("./binarySearch");

test("finds an element in an array", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const index = binarySearch(arr, 5);
  expect(index).toBe(4);
});

test("returns -1 if element not found in array", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const index = binarySearch(arr, 11);
  expect(index).toBe(-1);
});

test("works with an array of length 1", () => {
  const arr = [5];
  const index = binarySearch(arr, 5);
  expect(index).toBe(0);
});

test("works with an array of length 2", () => {
  const arr = [1, 5];
  const index = binarySearch(arr, 5);
  expect(index).toBe(1);
});

test("works with an array of length 3", () => {
  const arr = [1, 5, 10];
  const index = binarySearch(arr, 5);
  expect(index).toBe(1);
});

test("works with an array of length 4", () => {
  const arr = [1, 5, 7, 10];
  const index = binarySearch(arr, 7);
  expect(index).toBe(2);
});
