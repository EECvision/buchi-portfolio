import { createContext, useReducer } from "react";
import { InitialState, cursorReducer } from "./CursorReducer";

export const CursorContext = createContext(InitialState);

const CursorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursor, dispatch] = useReducer(cursorReducer, InitialState);

  return (
    <CursorContext.Provider value={{ ...cursor, dispatch }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
