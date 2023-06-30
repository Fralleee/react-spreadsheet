import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

interface GridCellProps {
  columnId: string;
  width: number | undefined;
}

const GridCell = ({ columnId, width }: GridCellProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  const toggleEdit = () => {
    setEditMode(prevState => !prevState);
  };

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  return (
    <div className="relative border-r border-cell-border bg-cell first:rounded-s last:rounded-e  last:border-r-0" style={{ width }}>
      <input ref={inputRef} onBlur={toggleEdit} type="text" defaultValue={"$1000"} disabled={!editMode} className="w-full bg-transparent py-2 text-center" />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100" onClick={toggleEdit}>
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  );
};

export default GridCell;
