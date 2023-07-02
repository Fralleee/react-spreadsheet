import { MIN_WIDTH } from "data/constants";
import { useState, useEffect, useRef } from "react";

interface UseResizableColumnArgs {
  index: number;
  width: number | undefined;
  setWidth: (index: number, width: number) => void;
}

const useResizableColumn = ({ index, width, setWidth }: UseResizableColumnArgs) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const indexRef = useRef(index);
  const widthRef = useRef(width);
  const setWidthRef = useRef(setWidth);

  useEffect(() => {
    indexRef.current = index;
    widthRef.current = width;
    setWidthRef.current = setWidth;
  }, [index, width, setWidth]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isResizing && widthRef.current !== undefined) {
        const movementX = event.clientX - startX;
        setWidthRef.current(indexRef.current, Math.max(widthRef.current + movementX, MIN_WIDTH));
        setStartX(event.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, startX]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsResizing(true);
    setStartX(event.clientX);
  };

  return { handleMouseDown };
};

export default useResizableColumn;
