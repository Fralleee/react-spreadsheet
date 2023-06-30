import { useState, useLayoutEffect, useRef } from "react";
import Header from "./spreadsheet/Header";
import DataGrid from "./spreadsheet/DataGrid";
import { MIN_WIDTH } from "data/constants";

const Spreadsheet = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [columnIds] = useState<string[]>(() => ["A", "B", "C"]);
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const initialWidth = Math.max(containerWidth / columnIds.length, MIN_WIDTH);
      const widths: Record<string, number> = {};
      for (let i = 0; i < columnIds.length; i++) {
        widths[columnIds[i]] = initialWidth;
      }
      setColumnWidths(widths);
    }
  }, [columnIds]);

  const setWidth = (columnId: string, width: number) => {
    setColumnWidths(prev => ({ ...prev, [columnId]: width }));
  };

  return (
    <div ref={containerRef} className="w-full flex-1">
      <Header columnIds={columnIds} columnWidths={columnWidths} setWidth={setWidth} />
      <DataGrid columnIds={columnIds} columnWidths={columnWidths} />
    </div>
  );
};

export default Spreadsheet;
