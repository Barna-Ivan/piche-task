import { createStore, applyMiddleware, combineReducers } from "redux";
import wikiReducer from "./wiki/wikiReducer";
import { thunk } from "redux-thunk";

const appReducer = combineReducers({ wiki: wikiReducer });
const rootReducer = (state: any, action: any) => appReducer(state, action);
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
