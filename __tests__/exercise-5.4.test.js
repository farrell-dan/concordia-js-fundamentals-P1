const exercise5_4 = require("../workshop/exercise-5.4");

test("Exercise 5.4", () => {
  exercise5_4();
  expect(console.log.mock.calls.join()).toBe(
    "36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0"
  );
});
