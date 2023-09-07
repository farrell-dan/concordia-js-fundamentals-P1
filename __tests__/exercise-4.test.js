const exercise4 = require("../workshop1/exercise-4");

test("Exercise 4", () => {
  exercise4();
  expect(console.log.mock.calls.join()).toBe(
    "1,3,5,7,9,11,13,15,17,19,21,23,25"
  );
});
