import { numberToLetter } from "./stringUtils";

describe("numberToLetter", () => {
  it("should throw an error for negative number", () => {
    expect(() => {
      numberToLetter(-1);
    }).toThrowError("Index out of bounds. Should be between 0 and 25.");
  });

  it("should throw an error for a number larger than 25", () => {
    expect(() => {
      numberToLetter(26);
    }).toThrowError("Index out of bounds. Should be between 0 and 25.");
  });

  it("should return the correct letter for a valid input", () => {
    expect(numberToLetter(0)).toBe("A");
    expect(numberToLetter(25)).toBe("Z");
  });
});
