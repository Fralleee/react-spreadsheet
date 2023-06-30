import { MIN_WIDTH } from "data/constants";
import { useState, useEffect, useCallback } from "react";

interface UseResizableColumnArgs {
  columnId: string;
  width: number | undefined;
  setWidth: (columnId: string, width: number) => void;
}

const useResizableColumn = ({ columnId, width, setWidth }: UseResizableColumnArgs) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing && width !== undefined) {
        const movementX = event.clientX - startX;
        setWidth(columnId, Math.max(width + movementX, MIN_WIDTH));
        setStartX(event.clientX);
      }
    },
    [isResizing, startX, width, columnId, setWidth]
  );

  const handleMouseUp = useCallback(() => {
    console.log("handleMouseUp");
    setIsResizing(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsResizing(true);
    setStartX(event.clientX);
  };

  return { handleMouseDown };
};

export default useResizableColumn;
