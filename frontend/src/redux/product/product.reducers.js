import productActionTypes from "./product.types";

const INITIAL_STATE = {
  products: [],
  loading: false,
};

export const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case productActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case productActionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const PRODUCT_DETAILS_INITIAL_STATE = {
  product: { reviews: [] },
};

export const productDetailsReducer = (
  state = PRODUCT_DETAILS_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case productActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case productActionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case productActionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
