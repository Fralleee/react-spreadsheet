import { useCallback, useState } from "react";
import GridRow from "./GridRow";
import { RowState } from "enums/RowState";

interface DataGridProps {
  columnIds: string[];
  columnWidths: ColumnWidths;
}

const DataGrid = ({ columnIds, columnWidths }: DataGridProps) => {
  const [editedRow, setEditedRow] = useState<number>(-1);
  const rows = new Array(10).fill(null);

  const handleCellEdit = useCallback((rowIndex: number) => {
    setEditedRow(rowIndex);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {rows.map((_, rowIndex) => (
        <GridRow
          key={rowIndex}
          rowState={editedRow === rowIndex ? RowState.Edit : rowIndex % 2 === 0 ? RowState.Error : RowState.Normal}
          rowIndex={rowIndex}
          columnIds={columnIds}
          columnWidths={columnWidths}
          onCellEdit={handleCellEdit}
        />
      ))}
    </div>
  );
};

export default DataGrid;
