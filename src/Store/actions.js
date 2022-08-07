import {
  SET_CARTCOUNT,
  SET_INFO,
  SET_WISHLISTCOUNT,
  SET_PAYMENT,
} from "./constants";

export const setInfo = (data) => ({
  type: SET_INFO,
  payload: data,
});

export const setWishlistCount = (data) => ({
  type: SET_WISHLISTCOUNT,
  payload: data,
});

export const setcartCount = (data) => ({
  type: SET_CARTCOUNT,
  payload: data,
});

export const setPayment = (data) => ({
  type: SET_PAYMENT,
  payload: data,
});
