import React from "react";

interface GridCellProps {
  columnId: string;
  width: number | undefined;
}

const GridCell: React.FC<GridCellProps> = ({ columnId, width }) => {
  return (
    <div className="h-10 grid items-center text-center first:rounded-s last:rounded-e border-r last:border-r-0 border-cell-border  bg-cell" style={{ width }}>
      $1000
    </div>
  );
};

export default GridCell;
