import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./Reducers/RootReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));