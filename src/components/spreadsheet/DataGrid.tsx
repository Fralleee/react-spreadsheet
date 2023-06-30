import React from "react";
import GridCell from "./GridCell";

interface DataGridProps {
  columnIds: string[];
  columnWidths: { [columnId: string]: number };
}

const DataGrid: React.FC<DataGridProps> = ({ columnIds, columnWidths }) => {
  const rows = new Array(10).fill(null);

  return (
    <div className="flex flex-col gap-4">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="flex bg-cell py-1 gap-1">
          {columnIds.map(columnId => (
            <GridCell key={columnId} columnId={columnId} width={columnWidths[columnId]} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
