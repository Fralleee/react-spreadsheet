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
  expression = expression.slice(1).toUpperCase();
  const replacedExpression = expression.replace(/[A-Z]+\d+/g, match => {
    const column = match.slice(0, 1);
    const row = parseInt(match.slice(1));
    const cellId = column + row;
    const cellValue = scope[cellId];
    return cellValue;
  });

  try {
    const result = evaluate(replacedExpression);
    if (!isFinite(result)) {
      return "#ERROR!";
    }
    return result;
  } catch (e) {
    return "#ERROR!";
  }
}

export function exportAsCsv(grid: CellValue[][]): Blob {
  const csvData = grid.map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  return blob;
}
