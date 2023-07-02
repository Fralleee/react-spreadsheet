import { numberToLetter } from "components/utils/stringUtils";
import { MIN_WIDTH } from "data/constants";
import { create } from "zustand";

type DataStore = {
  grid: number[][];
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
  grid: defaultGrid,
  headers: defaultGrid[0].map((_, index) => ({ index, label: numberToLetter(index), width: MIN_WIDTH })),
  isDirty: false,
  setCell: cell =>
    set(state => {
      const newGrid = [...state.grid];
      if (!newGrid[cell.rowIndex]) newGrid[cell.rowIndex] = [];
      newGrid[cell.rowIndex][cell.columnIndex] = cell.value;
      return { ...state, grid: newGrid };
    }),
  setDirty: () => set(() => ({ isDirty: true })),
  clearDirty: () => set(() => ({ isDirty: false })),
}));
