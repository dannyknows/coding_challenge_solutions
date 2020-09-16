const formatPair = (pair: string): string => {
  const cleanPair = pair.replace(/\W/g, "_");
  if (cleanPair.length < 2) {
    return cleanPair + "_";
  } else return cleanPair;
};

const SplitString = (string): string[] => {
  if (string.length < 1) {
    return [];
  }
  const pairs = string.match(/.{1,2}/g);
  const formattedPairs = pairs.map((pair) => formatPair(pair));
  return formattedPairs;
};

export default SplitString;
