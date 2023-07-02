import useResizableColumn from "hooks/useResizableColumn";

interface HeaderCellProps {
  header: GridHeader;
  setWidth: any;
  width: number;
}

const HeaderCell = ({ header, width, setWidth }: HeaderCellProps) => {
  const { index, label } = header;
  const { handleMouseDown } = useResizableColumn({ index, width, setWidth });

  return (
    <div className="group pointer-events-none relative grid h-10 select-none items-center bg-header text-center font-medium first:rounded-s last:rounded-e" style={{ width }}>
      {label}
      <div className="pointer-events-auto absolute -right-2 bottom-0 top-0 w-4 cursor-ew-resize group-last:pointer-events-none" onMouseDown={handleMouseDown} />
    </div>
  );
};

export default HeaderCell;
