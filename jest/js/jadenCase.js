const toJadenCase = (string) => {
  const words = string.split(" ");
  const capitalisedWords = words.map((word) => {
    const letters = word.split("");
    const capitalisedWord = [letters[0].toUpperCase(), ...letters.slice(1)];
    return capitalisedWord.join("");
  });
  return capitalisedWords.join(" ");
};

module.exports = toJadenCase;
