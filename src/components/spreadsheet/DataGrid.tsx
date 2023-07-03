import GridRow from "./GridRow";
import { useDataStore } from "hooks/useDataStore";

interface DataGridProps {
  columnWidths: number[];
}

const DataGrid = ({ columnWidths }: DataGridProps) => {
  const { grid, computedGrid } = useDataStore();
  return (
    <>
      <div className="flex flex-col gap-lg">
        {grid.map((data, rowIndex) => (
          <GridRow key={rowIndex} data={data} computedGrid={computedGrid} columnWidths={columnWidths} rowIndex={rowIndex} />
        ))}
      </div>
    </>
  );
};

export default DataGrid;
