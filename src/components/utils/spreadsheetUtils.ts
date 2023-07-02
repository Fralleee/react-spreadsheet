import { evaluate } from "mathjs";
import { numberToLetter } from "./stringUtils";

export function createScope(grid: CellValue[][]): Record<string, number> {
  let scope: Record<string, number> = {};

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
      const cellId = `${numberToLetter(columnIndex)}${rowIndex + 1}`;
      const cellValue = grid[rowIndex][columnIndex];
      scope[cellId] = typeof cellValue === "number" ? cellValue : NaN;
    }
  }

  return scope;
}

export function parseExpression(expression: string, scope: any) {
  if (expression[0] !== "=") {
    throw new Error("Invalid expression");
  }

  expression = expression.slice(1);
  const replacedExpression = expression.replace(/[A-Z]+\d+/g, match => {
    const cellValue = scope[match];
    if (cellValue === undefined) {
      throw new Error(`Cell ${match} not found`);
    }
    return cellValue;
  });

  return evaluate(replacedExpression);
}
