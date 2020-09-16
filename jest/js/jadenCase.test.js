const toJadenCase = require("./jadenCase.js");
describe("JadenCase", () => {
  // given
  const string = "hi my name is danny";
  const formattedString = "Hi My Name Is Danny";

  // then
  it("should return a string", () => {
    expect(typeof toJadenCase(string)).toBe("string");
  });

  it("should format given string correctly", () => {
    expect(toJadenCase(string)).toBe(formattedString);
  });
});
