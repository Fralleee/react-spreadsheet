import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RowState } from "enums/RowState";
import { useDataStore } from "hooks/useDataStore";
import useInputKeyboard from "hooks/useInputKeyboardBehaviour";
import { ChangeEvent, useEffect, useState } from "react";

interface GridCellProps {
  rowIndex: number;
  columnIndex: number;
  value: CellValue;
  width: number | undefined;
  setRowState: (state: RowState) => void;
}

const GridCell = ({ rowIndex, columnIndex, value, width, setRowState }: GridCellProps) => {
  const { setCell, setDirty, computedGrid } = useDataStore();
  const [editMode, setEditMode] = useState<boolean>(false);

  const toggleEdit = () => {
    setEditMode(prevState => !prevState);
  };

  const inputRef = useInputKeyboard(toggleEdit);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
      setRowState(RowState.Edit);
    }
  }, [columnIndex, computedGrid, editMode, inputRef, rowIndex, setRowState]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let newValue;

    if (!isNaN(Number(inputValue))) {
      newValue = Number(inputValue);
    } else {
      newValue = inputValue;
    }

    const newCell: GridCell = { columnIndex, rowIndex, value: newValue };
    setCell(newCell);
    setDirty();
  };

  const presentationValue = computedGrid[rowIndex][columnIndex].toString();
  return (
    <div
      className={`relative border-r border-border-cell first:rounded-s last:rounded-e last:border-r-0 ${
        editMode ? "scale-y-lg-cell border-none bg-cell-edit shadow-edit-cell" : ""
      }`}
      style={{ width }}>
      <input
        ref={inputRef}
        type="text"
        defaultValue={value}
        onBlur={handleInputChange}
        className={`h-full w-full bg-transparent text-center outline-none ${editMode ? "scale-y-sm-input" : "hidden"}`}
      />
      <div className={`grid h-full w-full items-center text-center align-middle ${editMode ? "hidden" : ""}`}>{presentationValue}</div>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100" onClick={toggleEdit}>
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  );
};

export default GridCell;
