import React from "react";
import HeaderCell from "./HeaderCell";

interface HeaderProps {
  columnIds: string[];
  columnWidths: { [columnId: string]: number };
  setWidth: (columnId: string, width: number) => void;
}

const Header: React.FC<HeaderProps> = ({ columnIds, columnWidths, setWidth }) => {
  return (
    <div className="flex mb-3 bg-header">
      {columnIds.map(columnId => (
        <HeaderCell key={columnId} columnId={columnId} width={columnWidths[columnId]} setWidth={setWidth} />
      ))}
    </div>
  );
};

export default Header;
