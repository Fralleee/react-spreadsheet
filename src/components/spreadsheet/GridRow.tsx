import { RowState } from "enums/RowState";
import GridCell from "./GridCell";

interface RowProps {
  rowIndex: number;
  data: CellValue[];
  rowState: RowState;
  columnWidths: number[];
  onCellEdit: (rowIndex: number) => void;
}

const GridRow = ({ data, rowIndex, rowState, columnWidths, onCellEdit }: RowProps) => {
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
        <GridCell key={index} value={cell} rowIndex={rowIndex} columnIndex={index} width={columnWidths[index]} onCellEdit={onCellEdit} />
      ))}
    </div>
  );
};

export default GridRow;
