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
        return "bg-row-edit-bg";
      case RowState.Error:
        return "border-2 border-row-error-border bg-row-error-bg shadow-row-error-shadow";
      default:
        return "bg-row-normal-bg";
    }
  };

  return (
    <div className={`box-border flex h-12 gap-1 rounded ${getRowStyle(rowState)}`}>
      {columnIds.map(columnId => (
        <GridCell key={columnId} rowIndex={rowIndex} columnId={columnId} width={columnWidths[columnId]} onCellEdit={onCellEdit} />
      ))}
    </div>
  );
};

export default GridRow;
