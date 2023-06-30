import HeaderCell from "./HeaderCell";

interface HeaderProps {
  columnIds: string[];
  columnWidths: ColumnWidths;
  setWidth: (columnId: string, width: number) => void;
}

const Header = ({ columnIds, columnWidths, setWidth }: HeaderProps) => {
  return (
    <div className="mb-3 flex bg-header">
      {columnIds.map(columnId => (
        <HeaderCell key={columnId} columnId={columnId} width={columnWidths[columnId]} setWidth={setWidth} />
      ))}
    </div>
  );
};

export default Header;
