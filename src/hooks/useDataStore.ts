import { numberToLetter } from "components/utils/stringUtils";
import { MIN_WIDTH } from "data/constants";
import { create } from "zustand";
import { createScope, parseExpression } from "components/utils/spreadsheetUtils";
import { deepCopy } from "components/utils/arrayUtils";

type DataStore = {
  grid: CellValue[][];
  computedGrid: CellValue[][];
  headers: GridHeader[];
  isDirty: boolean;
  setCell: (cell: GridCell) => void;
  setDirty: () => void;
  clearDirty: () => void;
};

const defaultGrid = [
  [1000, 1000, 1000],
  [500, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
  [1000, 1000, 1000],
];

export const useDataStore = create<DataStore>(set => ({
  grid: deepCopy(defaultGrid),
  computedGrid: deepCopy(defaultGrid),
  headers: defaultGrid[0].map((_, index) => ({ index, label: numberToLetter(index), width: MIN_WIDTH })),
  dependencies: {},
  isDirty: false,
  setCell: cell =>
    set(state => {
      const newGrid = [...state.grid];
      newGrid[cell.rowIndex][cell.columnIndex] = cell.value;

      const newComputedGrid = [...state.computedGrid];
      const scope = createScope(newGrid);
      for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[0].length; j++) {
          const cell = newGrid[i][j];
          if (typeof cell === "string" && cell[0] === "=") {
            newComputedGrid[i][j] = parseExpression(cell, scope);
          } else {
            newComputedGrid[i][j] = cell;
          }
        }
      }

      return { ...state, grid: newGrid, computedGrid: newComputedGrid };
    }),

  setDirty: () => set(() => ({ isDirty: true })),
  clearDirty: () => set(() => ({ isDirty: false })),
}));
