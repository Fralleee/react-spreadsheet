import { RowState } from "enums/RowState";
import GridCell from "./GridCell";

interface RowProps {
  rowIndex: number;
  rowState: RowState;
  columnIds: string[];
  columnWidths: ColumnWidths;
  onCellEdit: (rowIndex: number) => void;
}

const GridRow = ({ rowIndex, rowState, columnIds, columnWidths, onCellEdit }: RowProps) => {
  const getRowStyle = (state: RowState) => {
    switch (state) {
      case RowState.Edit:
        return "bg-row-edit";
      case RowState.Error:
        return "border-2 border-border-row-error bg-row-error shadow-error-row";
      default:
        return "bg-row-normal";
    }
  };

  return (
    <div className={`box-border flex h-12 gap-sm rounded ${getRowStyle(rowState)}`}>
      {columnIds.map(columnId => (
        <GridCell key={columnId} rowIndex={rowIndex} columnId={columnId} width={columnWidths[columnId]} onCellEdit={onCellEdit} />
      ))}
    </div>
  );
};

export default GridRow;
