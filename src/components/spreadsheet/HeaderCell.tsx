import React from "react";
import useResizableColumn from "hooks/useResizableColumn";

interface HeaderCellProps {
  columnId: string;
  width: number | undefined;
  setWidth: (columnId: string, width: number) => void;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ columnId, width, setWidth }) => {
  const { handleMouseDown } = useResizableColumn({ columnId, width, setWidth });

  return (
    <div className="relative grid items-center text-center bg-header first:rounded-s last:rounded-e h-10 font-medium pointer-events-none select-none group " style={{ width }}>
      {columnId}
      <div className="absolute -right-2 top-0 bottom-0 w-4 bg-red-500 cursor-col-resize pointer-events-auto group-last:pointer-events-none" onMouseDown={handleMouseDown} />
    </div>
  );
};

export default HeaderCell;
