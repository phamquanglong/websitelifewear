import {
  faBasketShopping,
  faBell,
  faInfoCircle,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { setcartCount, setInfo, setWishlistCount } from "../../Store/actions";
import { infoSelector } from "../../Store/selectors";
import AccountBtnItem from "./AccountBtnItem";

var AccountDivLogin = (props) => {
  var { setVisible } = props;
  var info = useSelector(infoSelector);

  let navigate = useNavigate();

  var dispatchRedux = useDispatch();
  var dispatchCart = (data) => {
    dispatchRedux(setcartCount(data));
  };

  var dispatchWishlist = (data) => {
    dispatchRedux(setWishlistCount(data));
  };

  let dispatchInfo = (data) => {
    dispatchRedux(setInfo(data));
  };

  var [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute left-0">
      <div className="w-screen h-screen" onClick={() => setVisible("")}></div>
      <div className="absolute flex right-32 top-0 bg-white shadow-md flex-col rounded-md">
        <div className="flex flex-row p-5 hover:bg-gray-200 w-full justify-center items-center">
          <div
            className="w-12 h-12 bg-cover border border-black mr-3 rounded-full"
            style={{
              backgroundImage: `url(${
                info.avatar !== null
                  ? info.avatar
                  : "http://localhost:8000/storage/images/users/default-user.png"
              })`,
            }}
          ></div>
          <div>{info.full_name}</div>
        </div>
        <div className="bg-gray-200 flex h-0.5 mx-2"></div>
        <AccountBtnItem
          icon={faInfoCircle}
          text="Thông tin cá nhân"
          onClick={() => navigate("/Info")}
        />
        <AccountBtnItem icon={faBell} text="Thông báo" />
        <AccountBtnItem icon={faBasketShopping} text="Đơn mua" />
        <Popup
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          modal
          position="center center"
          trigger={<AccountBtnItem icon={faSignOut} text="Đăng xuất" />}
          overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          contentStyle={{ width: "40%" }}
        >
          <div className="bg-white rounded-md p-5">
            <p className="text-xl">
              Bạn có chắc muốn đăng xuất tài khoản hiện tại không?
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  dispatchCart([]);
                  dispatchWishlist([]);
                  dispatchInfo({});
                  setIsOpen(false);
                  setVisible(false);
                }}
                className="px-5 py-3 bg-red-400 rounded-md text-white"
              >
                Đăng xuất
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setVisible(false);
                }}
                className="ml-5"
              >
                Hủy
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default AccountDivLogin;
