const exercise3 = require("../workshop/exercise-3");

test("Exercise 3", () => {
  exercise3();
  expect(console.log.mock.calls.join()).toBe(
    "0,1,4,9,16,25,36,49,64,81,100,121,144"
  );
});
