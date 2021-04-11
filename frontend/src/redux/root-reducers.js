import { combineReducers } from "redux";
import {
  productListReducer,
  productDetailsReducer,
} from "./product/product.reducers";
import { cartReducer } from "./cart/cart.reducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./user/user.reducers";
import { orderCreateReducer } from "./order/order.reducers";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
});

export default rootReducer;
