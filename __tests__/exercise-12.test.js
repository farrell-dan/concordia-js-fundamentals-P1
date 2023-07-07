const exercise12 = require("../2-workshop/exercise-12");

test("Exercise 12", () => {
  exercise12();
  expect(console.log.mock.calls[0][0]).toEqual(7778742049);
});
