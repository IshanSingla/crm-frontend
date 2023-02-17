import { combineReducers } from "redux";
import { UserReducer } from "./AllReducers/UserReducer";
import { MongoReducer } from "./AllReducers/MongoReducer";

export const rootReducer = combineReducers({
    UserReducer,
    MongoReducer
});