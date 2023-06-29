interface Props {
  headers: string[];
}

function TableHead({ headers }: Props) {
  return (
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
  );
}

const TheadMargin = () => (
  <tr>
    <th />
  </tr>
);

export default TableHead;
