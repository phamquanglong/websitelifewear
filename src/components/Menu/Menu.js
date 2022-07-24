import MenuItem from "./MenuItem";
import SearchBtn from "../SearchBtn";
import { getCart, getCategories, getWishlist } from "../../Data";
import { useState, useEffect, memo } from "react";
import { getInfo } from "../../Data";
import { useDispatch, useSelector } from "react-redux";
import { setcartCount, setInfo, setWishlistCount } from "../../Store/actions";
import lifewear from "../../img/lifewear.jpg";
import MenuBtn from "../MenuBtn";
import { useNavigate } from "react-router-dom";
import { colors } from "../../colors";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  cartCountSelector,
  wishlistCountSelector,
} from "../../Store/selectors";

var Menu = (props) => {
  var [categories, setCategories] = useState([]);
  var [categoriesOld, setCategoriesOld] = useState([]);

  var dispatchRedux = useDispatch();

  var dispatchHandler = (info) => {
    dispatchRedux(setInfo(info));
  };

  var dispatchWishlistCount = (data) => {
    dispatchRedux(setWishlistCount(data));
  };

  var dispatchCart = (data) => {
    dispatchRedux(setcartCount(data));
  };

  var cart = useSelector(cartCountSelector);
  console.log(cart);

  var token = localStorage.getItem("token");

  var navigate = useNavigate();

  var iconList = [faUser, faCartShopping, faHeart];

  useEffect(() => {
    getCategories(setCategories, setCategoriesOld);
    token !== null && getInfo(token, dispatchHandler);
    getWishlist(token, dispatchWishlistCount);
    // token !== null
    //   ? getCart(token, dispatchCart)
    //   : dispatchCart(JSON.parse(localStorage.getItem("cart")));
    getCart(token, dispatchCart);
  }, []);

  return (
    <div className="justify-between fixed w-full z-10 top-0">
      <div className="flex flex-row justify-between bg-white top-0">
        <div className="items-center flex" style={{ width: 180 }}>
          <SearchBtn />
        </div>
        <div className="flex">
          <MenuItem
            text={"Danh mục"}
            url={"Categories"}
            categories={categories}
            setCategories={setCategories}
            categoriesOld={categoriesOld}
          />
          <div
            className="h-24 w-96 bg-cover cursor-pointer"
            style={{ backgroundImage: `url("${lifewear}")` }}
            onClick={() => navigate("/")}
          ></div>
          <MenuItem text={"Giới thiệu"} url={"About"} />
        </div>
        <div className="flex flex-row items-end width-full items-center">
          <MenuBtn iconList={iconList} />
        </div>
      </div>

      <div className={`flex bg-${colors.hover} w-full h-0.5`}></div>
    </div>
  );
};

export default memo(Menu);
