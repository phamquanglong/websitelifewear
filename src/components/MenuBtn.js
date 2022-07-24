import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../colors";
import { cartCountSelector, wishlistCountSelector } from "../Store/selectors";
import WishlistDiv from "../Wishlist/WishistDiv";
import AccountDiv from "./Account/AccountDiv";
import AccountDivLogin from "./Account/AccountDivLogin";
import LoginRequest from "./LoginRequest";

var EachMenuBtn = (props) => {
  var { icon, visible, setVisible, isChoose, data } = props;
  var token = localStorage.getItem("token");

  var count = (d) => {
    if (d !== null) return d.length;
    else return 0;
  };

  var [num, setNum] = useState(0);
  icon.iconName === "cart-shopping" && console.log(data);

  useEffect(() => {
    setNum(count(data));
  }, [data]);

  return (
    <div>
      <button
        className={`relative text-xl py-4 px-5 hover:text-${colors.primary} ${
          isChoose(icon.iconName) ? `text-${colors.primary}` : ""
        }`}
        onClick={() => {
          setVisible(visible === icon.iconName ? "" : icon.iconName);
        }}
      >
        {icon.iconName !== "user" && num !== 0 && (
          <div className="absolute bg-red-400 px-1.5 right-3 top-3 rounded-full text-sm">
            {num}
          </div>
        )}
        <FontAwesomeIcon icon={icon} />
      </button>

      {isChoose(icon.iconName) &&
        (icon.iconName === "heart" ? (
          token === null ? (
            <LoginRequest setVisible={setVisible} />
          ) : (
            <WishlistDiv
              setVisible={setVisible}
              type="wishlist"
              wishlist={data}
            />
          )
        ) : icon.iconName === "user" ? (
          token === null ? (
            <AccountDiv setVisible={setVisible} />
          ) : (
            <AccountDivLogin setVisible={setVisible} />
          )
        ) : (
          <WishlistDiv setVisible={setVisible} cart={data} />
        ))}
    </div>
  );
};

var MenuBtn = (props) => {
  var { iconList } = props;
  var [visible, setVisible] = useState("");

  var wishlist = useSelector(wishlistCountSelector);
  var cart = useSelector(cartCountSelector);

  // console.log(cart);

  var isChoose = (name) => {
    if (
      iconList.length > 0 &&
      iconList.filter((item) => item.iconName === visible).length > 0
    )
      return iconList.filter((item) => item.iconName === visible)[0]
        .iconName === name
        ? true
        : false;
  };

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <div className="flex">
      {iconList.map((icon) => (
        <EachMenuBtn
          icon={icon}
          visible={visible}
          setVisible={setVisible}
          isChoose={isChoose}
          data={
            icon.iconName === "heart"
              ? wishlist
              : icon.iconName !== "user"
              ? cart
              : []
          }
        />
      ))}
    </div>
  );
};

export default MenuBtn;
