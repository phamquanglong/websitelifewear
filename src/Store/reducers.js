import { SET_CARTCOUNT, SET_INFO, SET_WISHLISTCOUNT } from "./constants";

const initialState = {
  info: {},
  wishlistCount: [],
  cartCount: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        info: action.payload,
      };
    case SET_WISHLISTCOUNT:
      return {
        ...state,
        wishlistCount: action.payload,
      };
    case SET_CARTCOUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
