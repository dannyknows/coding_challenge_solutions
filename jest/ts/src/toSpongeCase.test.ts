// ToWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

import toWeirdCase from "./toSpongeCase";

const normalString = "string";
const weirdCaseString = "StRiNg";

describe("to weird case", () => {
  it("should return a string in the the correct format", () => {
    expect(toWeirdCase(normalString)).toEqual(weirdCaseString);
  });
});
