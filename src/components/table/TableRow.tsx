import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function TableRow({ children }: Props) {
  return <tr className="text-center">{children}</tr>;
}

export default TableRow;
