const exercise9 = require("../workshop1/exercise-9");

test("Exercise 9", () => {
  exercise9();
  expect(console.log.mock.calls.join()).toBe(
    "#,##,###,####,#####,######,#######"
  );
});
