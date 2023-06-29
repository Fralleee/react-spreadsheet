import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  row: {
    id: number;
  };
  header: string;
}

function TableCell({ row, header }: Props) {
  return (
    <td className="relative p-0 first:rounded-s last:rounded-e bg-cell overflow-hidden">
      <input type="text" defaultValue={row[header as keyof typeof row]} className="py-3 rounded bg-transparent w-full text-center" />
      <button className="opacity-30 w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3">
        <FontAwesomeIcon icon={faPen} />
      </button>
    </td>
  );
}

export default TableCell;
