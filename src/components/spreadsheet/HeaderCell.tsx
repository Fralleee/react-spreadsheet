import useResizableColumn from "hooks/useResizableColumn";

interface HeaderCellProps {
  columnId: string;
  width: number | undefined;
  setWidth: (columnId: string, width: number) => void;
}

const HeaderCell = ({ columnId, width, setWidth }: HeaderCellProps) => {
  const { handleMouseDown } = useResizableColumn({ columnId, width, setWidth });

  return (
    <div className="group pointer-events-none relative grid h-10 select-none items-center bg-header text-center font-medium first:rounded-s last:rounded-e" style={{ width }}>
      {columnId}
      <div className="pointer-events-auto absolute -right-2 bottom-0 top-0 w-4 cursor-ew-resize group-last:pointer-events-none" onMouseDown={handleMouseDown} />
    </div>
  );
};

export default HeaderCell;
