import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import { addToCart, addToWishlist, getDetails } from "../Data";
import ReactLoading from "react-loading";
import SwiperImages from "../components/SwiperImages";
import Rating from "@mui/material/Rating";
import { colors } from "../colors";
import Options from "../components/Options";
import Quantity from "../components/Quantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import TransferItem from "./TransferItem";
import Reviews from "./Reviews";
import Footer from "../components/Footer";
import ProductsList from "../components/Products/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { setcartCount, setWishlistCount } from "../Store/actions";
import { cartCountSelector } from "../Store/selectors";

var ProductDetails = (props) => {
  var { state } = useLocation();
  var { id } = state;

  var [details, setDetails] = useState({});
  var [isLoading, setIsLoading] = useState(true);
  var [size, setSize] = useState("");
  var [color, setColor] = useState("");
  var [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getDetails(id, setDetails, setIsLoading);
    setColor("");
    setSize("");
    setQuantity(1);
  }, [id]);

  var cart = useSelector(cartCountSelector);

  var dispatchRedux = useDispatch();
  var dispatchHandle = (data) => {
    dispatchRedux(setcartCount(data));
  };

  var dispatchWishlist = (data) => {
    dispatchRedux(setWishlistCount(data));
  };

  var validate = () => {
    if (size === "" || color === "" || quantity < 1)
      alert("Bạn cần chọn màu sắc, kích cỡ và số lượng trước");
    else {
      addCart();
    }
  };

  var addCart = () => {
    if (
      cart.length !== 0 &&
      cart.filter(
        (i) =>
          i.color.name === color && i.size.name === size && i.id === details.id
      ).length > 0 &&
      cart.filter(
        (i) =>
          i.color.name === color && i.size.name === size && i.id === details.id
      )[0].variant_id ===
        details.variants.filter(
          (i) => i.color.name === color && i.size.name === size
        )[0].id
    ) {
      alert("Sản phẩm đã tồn tại trong giỏ hàng");
    } else {
      cart.push({
        ...details,
        size: { name: size },
        color: { name: color },
        cart_quantity: quantity,
        variant_id: details.variants.filter(
          (i) => i.color.name === color && i.size.name === size
        )[0].id,
      });
      localStorage.getItem("token") !== null
        ? addToCart(
            localStorage.getItem("token"),
            details.variants.filter(
              (i) => i.color.name === color && i.size.name === size
            )[0].id,
            quantity,
            dispatchHandle
          )
        : localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div>
      <Menu />
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center h-screen">
          <ReactLoading type="balls" color="black" height={"5%"} width={"5%"} />
        </div>
      ) : (
        <div className="flex items-center flex-col">
          <div className="mt-32 flex flex-row flex-1 justify-center">
            <SwiperImages images={details.images} />
            <div className="ml-10">
              <p className="text-2xl max-w-2xl">{details.name}</p>

              <div className="flex justify-between items-center my-5">
                <p className="line-through">
                  {details.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className={`text-${colors.primary} text-2xl font-bold`}>
                  {details.sale_price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>

              <div className="flex">
                <p>Đánh giá sản phẩm</p>
                <div className="flex flex-1"></div>
                <Rating
                  name="Đánh giá sản phẩm"
                  value={details.rating_avg}
                  readOnly
                />
                <p>({details.reviews_count} đáng giá)</p>
              </div>

              <div>
                <Options
                  options={details.options.colors}
                  text="Màu sắc"
                  value={color}
                  setValue={setColor}
                />
                <Options
                  options={details.options.sizes}
                  text="Kích cỡ"
                  value={size}
                  setValue={setSize}
                />
                <p className="mb-5 flex">
                  Số lượng:
                  <p className={`text-${colors.primary} font-bold ml-5`}>
                    (
                    {color.length > 0 &&
                    size.length > 0 &&
                    details.variants.filter(
                      (i) => i.color.name === color && i.size.name === size
                    ).length > 0
                      ? `${
                          details.variants.filter(
                            (i) =>
                              i.color.name === color && i.size.name === size
                          )[0].quantity
                        } sản phẩm có sẵn`
                      : "0 sản phẩm có sẵn"}
                    )
                  </p>
                </p>
                <Quantity quantity={quantity} setQuantity={setQuantity} />
              </div>
            </div>

            <div className="flex mx-10 flex-col">
              <button
                className={`hover:bg-${colors.primary} hover:text-white border border-${colors.primary} py-3 px-24 text-2xl rounded-md text-${colors.primary}`}
              >
                Mua hàng
              </button>
              <div className="flex w-full items-center justify-center my-5">
                <button
                  onClick={() => {
                    validate();
                    dispatchHandle(cart);
                    dispatchHandle(JSON.parse(localStorage.getItem("cart")));
                  }}
                  className={`hover:bg-black hover:text-white border border-black p-3 rounded-md text-black w-full`}
                >
                  Thêm vào giỏ hàng
                </button>
                <button
                  className="h-full border border-red-400 px-4 text-red-400 text-xl rounded-md ml-5 hover:bg-red-400 hover:text-white"
                  onClick={() => {
                    localStorage.getItem("token") !== null
                      ? addToWishlist(
                          localStorage.getItem("token"),
                          id,
                          dispatchWishlist
                        )
                      : alert("Bạn cần đăng nhập để sử dụng chức năng này!");
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>

              <div>
                <p>Các đơn vị vận chuyển:</p>
                <TransferItem
                  image="https://suno.vn/blog/wp-content/uploads/2018/11/141139logos-768x274.jpg"
                  url="https://ghn.vn/"
                />
                <TransferItem
                  image="https://suno.vn/blog/wp-content/uploads/2018/11/giao-hang-tiet-kiem.png"
                  url="https://giaohangtietkiem.vn/"
                />
                <TransferItem
                  image="https://suno.vn/blog/wp-content/uploads/2018/11/partner_kerry-768x245.png"
                  url="https://kerryexpress.com.vn/"
                />
              </div>
            </div>
          </div>

          <div className="my-32 justify-center flex w-2/3">
            <div className="flex flex-1 flex-col mr-10">
              <p className="text-2xl font-bold">Mô tả sản phẩm</p>
              <div
                className="overflow-y-auto max-h-screen flex flex-col bg-gray-200 my-2 p-2 rounded-md"
                dangerouslySetInnerHTML={{ __html: details.description }}
              ></div>
            </div>
            <div className="flex flex-1 w-32 flex-col">
              <div className="mb-10">
                <p className="text-2xl font-bold">Đặc điểm sản phẩm</p>
                <div className="bg-gray-200 p-2 rounded-md mt-2">
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                    Chất liệu: Pique mắt chim với thành phần 60% Cotton USA +
                    35% Polyester + 5% Spandex
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                    Sử dụng Cotton USA - sợi cotton tốt nhất trên thế giới
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                    Công nghệ nhuộm Solid Dyed tạo nên hiệu ứng bắt mắt
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                    Chất liệu vải độc đáo với hiệu ứng mắt chim độc đáo, mới lạ
                    và trẻ trung
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
                    Vải pique thông thoáng, thấm hút tốt có độ bền cao
                  </p>
                </div>
              </div>
              <Reviews id={id} details={details} />
            </div>
          </div>

          <ProductsList id={details.category.id} text="Sản phẩm tương tự" />

          <Footer />
        </div>
      )}
    </div>
  );
};

export default memo(ProductDetails);
