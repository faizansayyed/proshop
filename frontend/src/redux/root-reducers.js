import { combineReducers } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./product/product.reducers";
import { cartReducer } from "./cart/cart.reducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
