import { combineReducers } from "redux";
import productReducer from "./products/reducer";

const reducer = combineReducers({
  products: productReducer,
});

export default reducer;
