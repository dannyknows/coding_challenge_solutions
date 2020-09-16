// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

import { moveZeroToEnd } from "./moveZeroToEnd";

const mockArray = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const sortedArray = [false, 1, 1, 2, 1, 3, "a", 0, 0];

describe("moveZeroToEnd", () => {
  it("should return the sorted array", () => {
    expect(moveZeroToEnd(mockArray)).toEqual(sortedArray);
  });
});
