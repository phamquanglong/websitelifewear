import { useLocation, useNavigate } from "react-router-dom";
import lifewear from "../img/lifewear.jpg";
import Infotransfer from "./InfoTransfer";
import ShippingUnit from "./ShippingUnit";
import Menu from "../components/Menu/Menu";
import { createContext, useContext, useEffect, useState } from "react";
import { getCart, getInfo } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { setcartCount, setInfo } from "../Store/actions";
import PaymentMethod from "./PaymentMethod";
import CartList from "./CartList";
import { colors } from "../colors";

export let context = createContext();

let Payment = (props) => {
  let state = useLocation();
  let { data } = state.state;
  let navigate = useNavigate();
  let dispatchRedux = useDispatch();
  let dispatchInfo = (data) => {
    dispatchRedux(setInfo(data));
  };

  let dispatchCart = (data) => {
    dispatchRedux(setcartCount(data));
  };

  useEffect(() => {
    getInfo(localStorage.getItem("token"), dispatchInfo);
    getCart(localStorage.getItem("token"), dispatchCart);
  }, []);

  return (
    <context.Provider value={data === null ? undefined : data}>
      <div
        className={`w-full flex flex-col items-center bg-${colors.primary} h-screen`}
      >
        <div
          onClick={() => navigate("/")}
          className="h-24 w-96 bg-cover cursor-pointer my-10 rounded-full"
          style={{ backgroundImage: `url(${lifewear})` }}
        ></div>
        <div className="flex w-full justify-center">
          <div className="flex bg-gray-100 w-1/2 mr-5 pt-3 rounded-md">
            <Infotransfer />
            <div className="ml-5 mr-5">
              <ShippingUnit />
              <div className="h-0.5 flex bg-gray-300 mt-5"></div>
              <PaymentMethod />
            </div>
          </div>
          <CartList />
        </div>
      </div>
    </context.Provider>
  );
};

export default Payment;
