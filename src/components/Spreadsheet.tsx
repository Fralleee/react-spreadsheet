import { useLayoutEffect, useRef, useState } from "react";
import Header from "./spreadsheet/Header";
import DataGrid from "./spreadsheet/DataGrid";
import { MIN_WIDTH } from "data/constants";
import { useDataStore } from "hooks/useDataStore";

const Spreadsheet = () => {
  const { headers } = useDataStore();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [columnWidths, setColumnWidths] = useState<number[]>([0, 0, 0]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const initialWidth = Math.max(containerWidth / headers.length, MIN_WIDTH);
      const widths = Array(headers.length).fill(initialWidth);

      setColumnWidths(widths);
    }
  }, [headers]);

  const setWidth = (index: number, width: number) => {
    setColumnWidths(
      columnWidths.map((w, i) => {
        if (i === index) {
          return width;
        }
        return w;
      })
    );
  };

  return (
    <div ref={containerRef} className="w-full flex-1">
      <Header headers={headers} columnWidths={columnWidths} setWidth={setWidth} />
      <DataGrid columnWidths={columnWidths} />
    </div>
  );
};

export default Spreadsheet;
