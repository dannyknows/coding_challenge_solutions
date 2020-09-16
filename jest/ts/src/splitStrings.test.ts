// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
import splitString from "./splitStrings";

const string = "hello there";
const correctlySplitString = ["he", "ll", "o_", "th", "er", "e_"];
const string2 = "it's me gary the goat";
const correctlySplitString2 = ["it", "_s", "_m", "e_", "ga", "ry", "_t", "he", "_g", "oa", "t_"];
const string3 = "()*&^%$!!@#";
const correctlySplitString3 = ["__", "__", "__", "__", "__", "__"];

describe("split strings", () => {
  it("should split string", () => {
    expect(splitString(string).length).toBe(6);
  });
  it("should split string and format correctly", () => {
    expect(splitString(string)).toEqual(correctlySplitString);
  });
  it("should split string and format correctly", () => {
    expect(splitString(string2)).toEqual(correctlySplitString2);
  });
  it("should split string and format correctly", () => {
    expect(splitString(string3)).toEqual(correctlySplitString3);
  });
});
