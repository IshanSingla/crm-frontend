import { combineReducers } from "redux";
import { UserReducer } from "./AllReducers/UserReducer";

export const rootReducer = combineReducers({
    UserReducer,
});