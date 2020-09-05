import { combineReducers } from "redux";
import { mainReducer } from "./main";
import { modalReducer } from "./modal";

export const rootReducer = combineReducers({
  main: mainReducer,
  modal: modalReducer,
});
