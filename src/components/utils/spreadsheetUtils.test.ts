import { createScope, parseExpression } from "./spreadsheetUtils";

describe("createScope", () => {
  it("should create a correct scope from the grid", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const scope = createScope(grid);
    expect(scope).toEqual({ A1: 1, B1: 2, A2: 3, B2: 4 });
  });

  it("should assign NaN for non-numeric values", () => {
    const grid = [
      ["text", 2],
      [3, 4],
    ];
    const scope = createScope(grid);
    expect(scope).toEqual({ A1: NaN, B1: 2, A2: 3, B2: 4 });
  });
});

describe("parseExpression", () => {
  it("should correctly parse and evaluate expressions", () => {
    const scope = { A1: 1, B1: 2, A2: 3, B2: 4 };
    const expression = "=A1+B1";
    const result = parseExpression(expression, scope);
    expect(result).toBe(3);
  });

  it('should return "#ERROR!" for invalid expressions', () => {
    const scope = { A1: 1, B1: 2, A2: 3, B2: 4 };
    const expression = "=A1/0";
    const result = parseExpression(expression, scope);
    expect(result).toBe("#ERROR!");
  });
});
