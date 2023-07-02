import { useCallback, useState } from "react";
import GridRow from "./GridRow";
import { RowState } from "enums/RowState";
import { useDataStore } from "hooks/useDataStore";

interface DataGridProps {
  columnWidths: number[];
}

const DataGrid = ({ columnWidths }: DataGridProps) => {
  const { grid } = useDataStore();
  const [editedRow, setEditedRow] = useState<number>(-1);

  const handleCellEdit = useCallback((rowIndex: number) => {
    setEditedRow(rowIndex);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-lg">
        {grid.map((data, rowIndex) => (
          <GridRow
            key={rowIndex}
            data={data}
            columnWidths={columnWidths}
            rowState={editedRow === rowIndex ? RowState.Edit : rowIndex === 3 ? RowState.Error : RowState.Normal}
            rowIndex={rowIndex}
            onCellEdit={handleCellEdit}
          />
        ))}
      </div>
      <code>
        <pre>{JSON.stringify(grid, null, 2)}</pre>
      </code>
    </>
  );
};

export default DataGrid;
