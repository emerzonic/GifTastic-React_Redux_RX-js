import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import gifsReducer from "./gifsReducer";


export default combineReducers({
    errors:errorReducer,
    gifs:gifsReducer,
   
})