const exercise5_5 = require("../workshop1/exercise-5.5");

test("Exercise 5.5", () => {
  exercise5_5();
  expect(console.log.mock.calls.join()).toBe(
    "0 is even,1 is odd,2 is even,3 is odd,4 is even,5 is odd,6 is even,7 is odd,8 is even,9 is odd,10 is even"
  );
});
