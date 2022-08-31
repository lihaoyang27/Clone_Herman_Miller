import {combineReducers} from "redux";
import {ProductReducer} from "./mainPageReducer";
import {SingleProductReducer} from "./singleProductReducer";
import {AccountReducer} from "./accountReducer";


export default combineReducers({
    ProductReducer, SingleProductReducer, AccountReducer
})