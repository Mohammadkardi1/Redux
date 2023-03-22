import { combineReducers } from "redux";
import {reducerCounter} from "./ReducerCounter"
import {reducerAuth} from "./reducerAuth"

export const rootReducer = combineReducers({

    counter: reducerCounter,
    auth: reducerAuth,
})