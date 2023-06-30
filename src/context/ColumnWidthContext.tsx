import React, { useReducer, createContext, Dispatch } from "react";

interface State {
  columnWidths: { [key: string]: number };
}

interface Action {
  type: "SET_WIDTH";
  columnId: string;
  width: number;
}

const initialState: State = {
  columnWidths: {},
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_WIDTH":
      return {
        ...state,
        columnWidths: {
          ...state.columnWidths,
          [action.columnId]: action.width,
        },
      };
    default:
      throw new Error();
  }
}

export const ColumnWidthContext = createContext<{ state: State; dispatch: Dispatch<Action> }>({ state: initialState, dispatch: () => undefined });

export function ColumnWidthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ColumnWidthContext.Provider value={{ state, dispatch }}>{children}</ColumnWidthContext.Provider>;
}
