import { cursorActionTypes } from "./cursorActions";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type InitialStateType = {
  size: "small" | "large";
  component: "email" | "project" | null;
  dispatch: React.Dispatch<React.SetStateAction<any>>;
};

export const InitialState: InitialStateType = {
  size: "small",
  dispatch: () => {},
  component: null,
};

export const cursorReducer = (
  state: InitialStateType = InitialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case cursorActionTypes.SET_SIZE:
      return { ...state, size: action.payload };
    case cursorActionTypes.SET_COMPONENT:
      return { ...state, component: action.payload };
    default:
      return state;
  }
};
