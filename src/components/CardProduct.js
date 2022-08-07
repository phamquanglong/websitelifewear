import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { colors } from "../colors";
import { deleteCart, deleteWishlist } from "../Data";
import { setcartCount, setWishlistCount } from "../Store/actions";
import { cartCountSelector } from "../Store/selectors";
import Quantity from "./Quantity";

var CardProduct = (props) => {
  var { product, type } = props;

  var dispatchRedux = useDispatch();

  var dispatchHandler = (data) => {
    dispatchRedux(setWishlistCount(data));
  };

  var dispatchCart = (data) => {
    dispatchRedux(setcartCount(data));
  };

  var navigate = useNavigate();

  var cart = useSelector(cartCountSelector);

  var deleteFn = () => {
    dispatchCart(
      cart.filter(
        (item) =>
          item.id !== product.id ||
          (item.id === product.id &&
            (item.color.name !== product.color.name ||
              item.size.name !== product.size.name))
      )
    );
  };

  return (
    <div className="flex mb-5 items-center">
      <button
        onClick={() => {
          navigate("/Details", { state: { id: product.id } });
        }}
        className="w-24 h-32 bg-cover mr-5"
        style={{ backgroundImage: `url('${product.cover}')` }}
      ></button>
      <div className="flex flex-col h-32">
        <LinesEllipsis
          className="w-72 px-2 h-10"
          text={product.name}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <div className="flex items-center justify-end">
          <p className="line-through mr-3">
            {product.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p className={`text-xl text-${colors.primary} font-bold`}>
            {product.sale_price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>

        {type !== "wishlist" && (
          <div className="flex mt-3 justify-between items-center">
            <div className="flex items-center">
              <p
                className={`px-4 py-2 h-fit bg-${colors.primary} items-center flex text-white`}
              >
                {product.color.name}
              </p>
              <p className={`5 bg-${colors.hover} px-4 py-2`}>
                {product.size.name}
              </p>
            </div>

            <p className="text-gray-400">x{product.cart_quantity}</p>
          </div>
        )}
      </div>

      {type !== "payment" && (
        <div className="justify-end flex">
          <button
            className="text-red-400 h-fit ml-10"
            onClick={() =>
              localStorage.getItem("token") !== null
                ? type === "wishlist"
                  ? deleteWishlist(
                      localStorage.getItem("token"),
                      product.id,
                      dispatchHandler
                    )
                  : deleteCart(
                      localStorage.getItem("token"),
                      product.variant_id,
                      dispatchCart
                    )
                : deleteFn()
            }
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(CardProduct);
