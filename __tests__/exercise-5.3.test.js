const exercise5_3 = require("../workshop/exercise-5.3");

test("Exercise 5.3", () => {
  exercise5_3();
  expect(console.log.mock.calls.join()).toBe(
    "2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50"
  );
});
