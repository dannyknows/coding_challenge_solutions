// const generatePhoneNumber = require("./phoneNumberGenerator");

// // mock file
// const notNumbers = "a";
// const notEnoughNumbers = [1, 2, 3, 4, 1, 5];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const phoneNumber = "(123) 456-7890";

// describe("generatePhoneNumber", () => {
//   // given

//   // then
//   it("should return a string", () => {
//     expect(typeof generatePhoneNumber(numbers)).toBe("string");
//   });
//   it("should return false if not enough numbers are provided", () => {
//     expect(generatePhoneNumber([1, 2, 3])).toBe(false);
//   });
//   it("should return false if anything but an array is provided", () => {
//     expect(generatePhoneNumber(notNumbers)).toBe(false);
//   });
//   it("should return a correctly formatted phone number", () => {
//     expect(generatePhoneNumber(numbers)).toMatch(/\(...\)\s...\-..../g);
//     expect(generatePhoneNumber(numbers)).toBe(phoneNumber);
//   });
// });

const generatePhoneNumber = require("./phoneNumberGenerator");

const mockNumberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const mockNumberArray2 = [2, 3, 4, 5, 6, 7, 8, 9, 1, 4]

const expectedPhoneNumber1 = "(123) 456-7890"
const expectedPhoneNumber2 = "(234) 567-8914"

const arrayWithMoreThanTenItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
const arrayWithLessThanTenItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayWithStringItem = [1, '2', 3, 4, 5, 6, 7, 8, 9, 0]


describe("generatePhoneNumber", () => {
  it("should take a phone number array and return a correctly formatted phone number string", () => {
    expect(generatePhoneNumber(mockNumberArray1)).toBe(expectedPhoneNumber1);
    expect(generatePhoneNumber(mockNumberArray2)).toBe(expectedPhoneNumber2);
  });

  fit("should throw an error if it receives an array that is more or less than 10 items", () => {
    expect(() => {
      generatePhoneNumber(arrayWithMoreThanTenItems)
    }).toThrow('Incorrect input')

    expect(() => {
      generatePhoneNumber(arrayWithLessThanTenItems)
    }).toThrow('Incorrect input')
  })

  fit("should throw an  if it receives an array that error is not numbers", () => {
    expect(() => {
      generatePhoneNumber(arrayWithStringItem)
    }).toThrow('Incorrect input')
  })
});


