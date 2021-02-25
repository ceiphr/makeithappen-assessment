import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";

const config = {
  menuReducer: menuReducer,
};

const appReducer = combineReducers(config);
export default appReducer;
