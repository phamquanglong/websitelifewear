import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../colors";
import CardProduct from "../components/CardProduct";

var WishlistDiv = (props) => {
  var { setVisible, type, wishlist, cart } = props;

  var list = type === "wishlist" ? wishlist : cart;
  // localStorage.getItem("token") !== null
  //   ? type === "wishlist"
  //     ? wishlist
  //     : cart
  //   : JSON.parse(localStorage.getItem("cart"));

  // console.log({ arr: list, cart: JSON.parse(localStorage.getItem("cart")) });

  return (
    <div className="absolute left-0">
      <div className="w-screen h-screen" onClick={() => setVisible("")}></div>
      <div
        className="absolute flex right-5 top-0 bg-white shadow-md p-5 flex-col rounded-md overflow-auto h-fit"
        style={{ maxHeight: "70%" }}
      >
        <div className="flex  p-5 flex-col overflow-auto">
          {list !== null && list.length > 0 ? (
            list.map((item) => <CardProduct product={item} type={type} />)
          ) : (
            <div className="flex flex-col items-center mb-5">
              <p className="text-6xl text-gray-600">
                <FontAwesomeIcon
                  icon={type === "wishlist" ? faHeart : faCartShopping}
                />
              </p>
              <p className="text-gray-600">
                {type === "wishlist" ? "Danh sách yêu thích " : "Giỏ hàng "}
                của bạn trống
              </p>
            </div>
          )}
        </div>

        <button
          className={`bg-${colors.primary} text-white px-5 py-4 rounded-md`}
        >
          {type === "wishlist"
            ? "Xem danh sách sản phẩm yêu thích"
            : "Xem giỏ hàng"}
        </button>
      </div>
    </div>
  );
};

export default WishlistDiv;
