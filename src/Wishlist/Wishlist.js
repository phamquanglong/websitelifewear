import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import ReactLoading from "react-loading";
import Card from "./Card";
import { colors } from "../colors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { cartCountSelector, wishlistCountSelector } from "../Store/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

var Wishlist = (props) => {
  var state = useLocation();
  var { type } = state.state;
  let navigate = useNavigate();

  let list = useSelector(cartCountSelector);

  let data = useSelector(
    type !== "wishlist" ? cartCountSelector : wishlistCountSelector
  );

  var count = (d) => {
    let cnt = 0;
    d.map((i) => (cnt += Number(i.cart_quantity)));
    if (d !== null)
      return d.map((i) => i.cart_quantity === undefined)[0] ? d.length : cnt;
    else return 0;
  };

  let totalPrice = () => {
    let a = 0;
    data.map((item) => (a += Number(item.cart_quantity) * item.sale_price));
    return a;
  };

  useEffect(() => {
    console.log(data);
  }, [type, data]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Menu />
        <p className="text-3xl font-bold mt-36 text-center mb-16 uppercase">
          {type !== "wishlist" ? "Giỏ hàng" : "Sản phẩm yêu thích"}
        </p>
        <div className="flex justify-center">
          <div className="w-3/5 flex flex-col mr-10">
            <div className={` text-${colors.primary}`}>
              <div className="bg-gray-200 h-0.5"></div>
              {type !== "wishlist" ? (
                <div className="flex text-xl font-bold py-3 bg-gray-100">
                  <p className="w-1/2 ml-5">Sản phẩm</p>
                  <p className="w-1/5 text-center">Số lượng</p>
                  <p className="w-1/5 text-end pr-5">Đơn giá</p>
                  <p className="w-1/5 text-end pr-10">Tổng</p>
                </div>
              ) : (
                <div className="flex text-xl font-bold py-3 bg-gray-100">
                  <p className="w-1/2 ml-5">Sản phẩm</p>
                  <p className="w-1/4 ml-52">Giá niêm yết</p>
                  <p className="w-1/4 text-end pr-5">Giá khuyến mãi</p>
                </div>
              )}
              <div className="bg-gray-200 h-0.5 "></div>
            </div>
            <div className="items-center flex flex-col">
              {data.length === 0 ? (
                <div className="h-96 items-center flex">
                  <p>Không có sản phẩm nào trong giỏ</p>
                </div>
              ) : data !== undefined ? (
                data.map((item, index) => (
                  <Card
                    product={item}
                    line={index === data.length - 1 ? false : true}
                    type={item.color === undefined && "wishlist"}
                  />
                ))
              ) : (
                <ReactLoading
                  type="balls"
                  color="black"
                  height={"5%"}
                  width={"5%"}
                />
              )}
            </div>
          </div>
          {type !== "wishlist" && (
            <div className="flex flex-col">
              <div className={`bg-gray-100 h-fit p-3 rounded-md`}>
                <div className="flex justify-between mb-5">
                  <p>Tổng cộng:</p>
                  <p className={`text-${colors.primary} font-bold text-xl`}>
                    {totalPrice().toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
                <button
                  disabled={count(data) === 0}
                  onClick={() =>
                    navigate("/Payment", { state: { data: list } })
                  }
                  className={`p-5 bg-${colors.primary} text-white rounded-md px-32`}
                >
                  Thanh toán
                </button>
              </div>
              <p className="flex w-full justify-between my-5">
                Đơn hàng của bạn{" "}
                <p className={`text-${colors.primary}`}>
                  ({count(data)}) sản phẩm
                </p>
              </p>

              <button
                onClick={() => navigate("/")}
                className={`p-3 bg-${colors.hover} items-center self-end flex`}
              >
                Tiếp tục mua hàng
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
