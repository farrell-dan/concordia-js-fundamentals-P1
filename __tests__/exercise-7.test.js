const exercise7 = require("../2-workshop/exercise-7");

test("Exercise 7", () => {
  exercise7();
  expect(console.log.mock.calls.join()).toBe("The sum is 3127500");
});
