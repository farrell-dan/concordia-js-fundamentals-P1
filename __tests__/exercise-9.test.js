const exercise9 = require("../2-workshop/exercise-9");

test("Exercise 9", () => {
  exercise9();
  expect(console.log.mock.calls.join()).toBe(
    "#,##,###,####,#####,######,#######"
  );
});
