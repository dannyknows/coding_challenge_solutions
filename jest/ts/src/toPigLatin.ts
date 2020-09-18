// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (string: string): string => {
  const words = string.split(" ");
  const pigString = words.map((word) => {
    if (word.match(/[^\w ]/g)) return word;
    return word.substring(1) + (word[0] + "ay");
  });
  return pigString.join(" ");
};

export default pigIt;
