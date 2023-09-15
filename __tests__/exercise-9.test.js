const exercise9 = require("../workshop/exercise-9");

test("Exercise 9", () => {
  exercise9();
  expect(console.log.mock.calls.join()).toBe(
    "#,##,###,####,#####,######,#######"
  );
});
