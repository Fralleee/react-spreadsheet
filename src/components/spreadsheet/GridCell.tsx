interface GridCellProps {
  columnId: string;
  width: number | undefined;
}

const GridCell = ({ columnId, width }: GridCellProps) => {
  return (
    <div className="grid h-10 items-center border-r border-cell-border bg-cell text-center first:rounded-s last:rounded-e  last:border-r-0" style={{ width }}>
      $1000
    </div>
  );
};

export default GridCell;
