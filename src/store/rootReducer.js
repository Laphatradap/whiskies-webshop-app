import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import articleReducer from "./articles/reducer";
import cartReducer from "./cart/reducer";

const reducer = combineReducers({
  products: productReducer,
  articles: articleReducer,
  cart: cartReducer,
});

export default reducer;
