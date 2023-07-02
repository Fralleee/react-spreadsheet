interface ColumnWidths {
  [columnId: string]: number;
}

interface GridHeader {
  index: number;
  label: string;
}

interface GridCell {
  rowIndex: number;
  columnIndex: number;
  value: CellValue;
}

type CellValue = number | string;
