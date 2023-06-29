import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const tableData = [
  { id: 1, A: "$1000", B: "$1000", C: "$1000" },
  { id: 2, A: "$1000", B: "$1000", C: "$1000" },
  { id: 3, A: "$1000", B: "$1000", C: "$1000" },
  { id: 4, A: "$1000", B: "$1000", C: "$1000" },
  { id: 5, A: "$1000", B: "$1000", C: "$1000" },
  { id: 6, A: "$1000", B: "$1000", C: "$1000" },
  { id: 7, A: "$1000", B: "$1000", C: "$1000" },
  { id: 8, A: "$1000", B: "$1000", C: "$1000" },
  { id: 9, A: "$1000", B: "$1000", C: "$1000" },
  { id: 10, A: "$1000", B: "$1000", C: "$1000" },
];

const extractHeaders = (table: any[]) => (table.length > 0 ? Object.keys(table[0]).filter(k => k !== "id") : []);

function Table() {
  const headers = extractHeaders(tableData);
  return (
    <table className="table-fixed w-full border-separate border-spacing-y-1">
      <TableHead headers={headers} />
      <tbody>
        {tableData.map(row => (
          <TableRow key={row.id}>
            {headers.map((header: string) => (
              <TableCell key={`${row.id}::${header}`} row={row} header={header} />
            ))}
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
