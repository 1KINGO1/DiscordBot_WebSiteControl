import {combineReducers} from "redux";
import {mainReducer} from "./main/mainReducer";

export let rootReducer = combineReducers({
    main: mainReducer
})