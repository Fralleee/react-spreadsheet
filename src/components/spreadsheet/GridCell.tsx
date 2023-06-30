import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInputKeyboard from "hooks/useInputKeyboardBehaviour";
import { useEffect, useState } from "react";

interface GridCellProps {
  columnId: string;
  width: number | undefined;
}

const GridCell = ({ columnId, width }: GridCellProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const toggleEdit = () => {
    setEditMode(prevState => !prevState);
  };

  const inputRef = useInputKeyboard(toggleEdit);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode, inputRef]);

  return (
    <div className="relative border-r border-cell-border bg-cell first:rounded-s last:rounded-e  last:border-r-0" style={{ width }}>
      <input ref={inputRef} type="text" defaultValue={"1000"} disabled={!editMode} className={`w-full bg-transparent py-2 text-center ${editMode ? "" : "hidden"}`} />
      <div className={`w-full py-2 text-center ${editMode ? "hidden" : ""}`}>${inputRef.current?.value}</div>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100" onClick={toggleEdit}>
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  );
};

export default GridCell;
