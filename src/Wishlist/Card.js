import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { colors } from "../colors";
import Quantity from "../components/Quantity";
import { deleteCart, deleteWishlist, updateQuantity } from "../Data";
import { setcartCount, setWishlistCount } from "../Store/actions";
import { cartCountSelector } from "../Store/selectors";

var Card = (props) => {
  var { product, line } = props;
  var [quantity, setQuantity] = useState();

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  var cart = useSelector(cartCountSelector);

  let update = (num) => {
    token !== null
      ? updateQuantity(
          localStorage.getItem("token"),
          product.variant_id,
          num,
          dispatchCart
        )
      : dispatchCart(
          cart.map((item) => {
            if (item.variant_id === product.variant_id)
              item.cart_quantity = num;
            return item;
          })
        );
  };

  var dispatchRedux = useDispatch();

  var dispatchHandler = (data) => {
    dispatchRedux(setWishlistCount(data));
  };

  var dispatchCart = (data) => {
    dispatchRedux(setcartCount(data));
  };

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

  useEffect(() => {
    console.log("card");
    setQuantity(Number(product.cart_quantity));
  }, [cart, quantity]);

  return (
    <div className="items-center flex flex-col w-full">
      <div className="flex justify-between w-full my-5">
        <div className="flex">
          <div
            onClick={() => navigate("/Details", { state: { id: product.id } })}
            className="w-32 h-40 bg-cover mr-5 cursor-pointer"
            style={{ backgroundImage: `url(${product.cover})` }}
          ></div>
          <div>
            <LinesEllipsis
              className="w-72 h-14"
              text={product.name}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />

            {product.color !== undefined && (
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
            )}

            <button
              className="text-red-400 mt-10 flex items-center"
              onClick={() =>
                localStorage.getItem("token") !== null
                  ? product.color === undefined
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
              <p className="mr-3">Xóa</p>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>

        {product.color !== undefined && (
          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
            updateQuantity={update}
          />
        )}
        <p className={`text-xl`}>
          {product.color !== undefined
            ? product.sale_price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })
            : product.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
        </p>
        <p className={`text-xl text-${colors.primary} font-bold`}>
          {(
            product.sale_price * (product.color !== undefined ? quantity : 1)
          ).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>
      {line && <div className="bg-gray-200 h-0.5 w-full"></div>}
    </div>
  );
};

export default Card;
