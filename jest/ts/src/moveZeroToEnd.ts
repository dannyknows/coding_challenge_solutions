// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

export const moveZeroToEnd = (array: any[]) => {
  const arrayLessZero = array.filter((index) => index !== 0);
  const zeroCount = array.length - arrayLessZero.length;
  const arrayOfZeros = Array(zeroCount).fill(0);
  return [...arrayLessZero, ...arrayOfZeros];
};
