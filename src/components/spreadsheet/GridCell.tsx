import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDataStore } from "hooks/useDataStore";
import useInputKeyboard from "hooks/useInputKeyboardBehaviour";
import { ChangeEvent, useEffect, useState } from "react";

interface GridCellProps {
  rowIndex: number;
  columnId: string;
  width: number | undefined;
  onCellEdit: (rowIndex: number) => void;
}

const GridCell = ({ rowIndex, columnId, width, onCellEdit }: GridCellProps) => {
  const { setDirty } = useDataStore();
  const [editMode, setEditMode] = useState<boolean>(false);

  const toggleEdit = () => {
    setEditMode(prevState => !prevState);
  };

  const inputRef = useInputKeyboard(toggleEdit);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
      onCellEdit(rowIndex);
    } else {
      onCellEdit(-1);
    }
  }, [editMode, inputRef, onCellEdit, rowIndex]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDirty();
  };

  return (
    <div
      className={`relative border-r border-border-cell first:rounded-s last:rounded-e last:border-r-0 ${
        editMode ? "scale-y-lg-cell border-none bg-cell-edit shadow-edit-cell" : ""
      }`}
      style={{ width }}>
      <input
        ref={inputRef}
        type="text"
        defaultValue={"1000"}
        onChange={handleInputChange}
        className={`h-full w-full bg-transparent text-center outline-none ${editMode ? "scale-y-sm-input" : "hidden"}`}
      />
      <div className={`grid h-full w-full items-center text-center align-middle ${editMode ? "hidden" : ""}`}>${inputRef.current?.value}</div>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100" onClick={toggleEdit}>
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  );
};

export default GridCell;
