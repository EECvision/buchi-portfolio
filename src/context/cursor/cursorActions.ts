import { InitialStateType } from "./CursorReducer";

export const cursorActionTypes = {
  SET_SIZE: "SET_SIZE",
  SET_COMPONENT: "SET_COMPONENT",
};

export const setSize = (value: InitialStateType["size"]) => ({
  type: cursorActionTypes.SET_SIZE,
  payload: value,
});

export const setComponent = (value: InitialStateType["component"]) => ({
  type: cursorActionTypes.SET_COMPONENT,
  payload: value,
});
