import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const TheadMargin = () => (
  <tr>
    <th />
  </tr>
);

function Table() {
  const headers = extractHeaders(tableData);
  return (
    <table className="table-fixed w-full border-separate border-spacing-y-1">
      <thead className="py-2">
        <tr className=" rounded">
          {headers.map(header => (
            <th key={header} className="bg-header p-2 first:rounded-s last:rounded-e">
              {header}
            </th>
          ))}
        </tr>
        <TheadMargin />
      </thead>
      <tbody>
        {tableData.map(row => (
          <tr key={row.id} className="text-center">
            {headers.map((header: string) => (
              <td key={`${row.id}::${header}`} className="relative p-0 first:rounded-s last:rounded-e bg-cell overflow-hidden">
                <input type="text" defaultValue={row[header as keyof typeof row]} className="py-3 rounded bg-transparent w-full text-center" />
                <button className="opacity-30 w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3">
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
