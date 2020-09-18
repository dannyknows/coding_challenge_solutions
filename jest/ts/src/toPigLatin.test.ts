// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

import pigIt from "./toPigLatin";
const regularString = "Hello World";
const pigLatinString = "elloHay orldWay";

const specialCharString = "Hello World !";
const specialCharPigLatinString = "elloHay orldWay !";
describe("to pig latin", () => {
  it("should return a pig latin string", () => {
    expect(pigIt(regularString)).toEqual(pigLatinString);
  });
  it("should ignore special symbols", () => {
    expect(pigIt(specialCharString)).toEqual(specialCharPigLatinString);
  });
});
