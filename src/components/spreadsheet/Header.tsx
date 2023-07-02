import HeaderCell from "./HeaderCell";

interface HeaderProps {
  headers: GridHeader[];
  columnWidths: number[];
  setWidth: any;
}

const Header = ({ headers, columnWidths, setWidth }: HeaderProps) => {
  return (
    <div className="mb-3 flex rounded bg-header">
      {headers.map((header, index) => (
        <HeaderCell key={header.index} width={columnWidths[index]} header={header} setWidth={setWidth} />
      ))}
    </div>
  );
};

export default Header;
