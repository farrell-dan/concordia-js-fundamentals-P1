const exercise2 = require("../2-workshop/exercise-2");

// https://devhints.io/jest

test("Exercise 2", () => {
  exercise2();
  expect(console.log.mock.calls.join()).toBe("1,2,3,4,5");
});
