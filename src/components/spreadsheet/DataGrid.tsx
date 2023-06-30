import GridCell from "./GridCell";

interface DataGridProps {
  columnIds: string[];
  columnWidths: ColumnWidths;
}

const DataGrid = ({ columnIds, columnWidths }: DataGridProps) => {
  const rows = new Array(10).fill(null);
  return (
    <div className="flex flex-col gap-4">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 rounded bg-cell py-1">
          {columnIds.map(columnId => (
            <GridCell key={columnId} columnId={columnId} width={columnWidths[columnId]} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
