import { RowState } from "enums/RowState";
import GridCell from "./GridCell";
import { useState } from "react";

interface RowProps {
  rowIndex: number;
  data: CellValue[];
  computedGrid: CellValue[][];
  columnWidths: number[];
}

const GridRow = ({ data, computedGrid, rowIndex, columnWidths }: RowProps) => {
  const [rowState, setRowState] = useState<RowState>(RowState.Normal);

  const checkRowState = () => {
    const hasError = computedGrid[rowIndex].includes("#ERROR!");
    if (hasError) {
      setRowState(RowState.Error);
    } else {
      setRowState(RowState.Normal);
    }
  };

  const getRowStyle = (state: RowState) => {
    switch (state) {
      case RowState.Edit:
        return "bg-row-edit border-transparent";
      case RowState.Error:
        return "border-error-border bg-error shadow-error-row";
      default:
        return "bg-row-normal border-transparent";
    }
  };

  return (
    <div className={`flex h-12 gap-sm rounded border-2 ${getRowStyle(rowState)}`}>
      {data.map((cell, index) => (
        <GridCell key={index} value={cell} rowIndex={rowIndex} columnIndex={index} width={columnWidths[index]} setRowState={setRowState} triggerRowCheck={checkRowState} />
      ))}
    </div>
  );
};

export default GridRow;
