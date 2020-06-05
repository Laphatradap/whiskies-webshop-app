import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import articleReducer from "./articles/reducer";

const reducer = combineReducers({
  products: productReducer,
  articles: articleReducer,
});

export default reducer;
