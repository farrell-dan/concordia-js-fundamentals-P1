const exercise10 = require("../workshop1/exercise-10");

test("Exercise 10", () => {
  exercise10();
  expect(console.log.mock.calls.join()).toBe(
    "#_#_#_#_,_#_#_#_#,#_#_#_#_,_#_#_#_#,#_#_#_#_,_#_#_#_#,#_#_#_#_,_#_#_#_#"
  );
});
