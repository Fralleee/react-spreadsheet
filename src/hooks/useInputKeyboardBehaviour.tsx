import { useEffect, useRef } from "react";

const useInputKeyboard = (onBlur: () => void) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        inputRef.current?.blur();
      }
      if (event.key === "Escape") {
        inputRef.current?.blur();
      }
    };

    const handleBlur = () => {
      onBlur();
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("keydown", handleKeyDown);
      inputRef.current.addEventListener("blur", handleBlur);
    }

    const cachedRef = inputRef.current;
    return () => {
      if (cachedRef) {
        cachedRef.removeEventListener("keydown", handleKeyDown);
        cachedRef.removeEventListener("blur", handleBlur);
      }
    };
  }, [onBlur]);

  return inputRef;
};

export default useInputKeyboard;
