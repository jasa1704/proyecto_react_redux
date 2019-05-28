import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
//import ventasReducer from "./ventasReducer";
export default combineReducers({
  productos: productosReducer
});