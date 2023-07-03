import { deepCopy } from "./arrayUtils";

describe("deepCopy", () => {
  it("should return a deep copy of a simple array", () => {
    const arr = [1, 2, 3];
    const copy = deepCopy(arr);

    expect(copy).toEqual(arr);
    expect(copy).not.toBe(arr);
  });

  it("should return a deep copy of a complex array", () => {
    const arr = [1, [2, 3], { a: "b" }];
    const copy = deepCopy(arr);

    expect(copy).toEqual(arr);
    expect(copy).not.toBe(arr);
    expect(copy[1]).not.toBe(arr[1]);
    expect(copy[2]).not.toBe(arr[2]);
  });
});
