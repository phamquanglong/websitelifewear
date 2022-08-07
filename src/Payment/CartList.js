import { useDispatch, useSelector } from "react-redux";
import { cartCountSelector, paymentSelector } from "../Store/selectors";
import CardProduct from "../components/CardProduct";
import { colors } from "../colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { setPayment } from "../Store/actions";

let CartList = (props) => {
  let list = useSelector(cartCountSelector);
  let payment = useSelector(paymentSelector);

  let dispatchRedux = useDispatch();
  let dispatchPayment = (data) => {
    dispatchRedux(setPayment(data));
  };

  let navigate = useNavigate();

  var count = (d) => {
    let cnt = 0;
    d.map((i) => (cnt += Number(i.cart_quantity)));
    if (d !== null)
      return d.map((i) => i.cart_quantity === undefined)[0] ? d.length : cnt;
    else return 0;
  };

  let totalPrice = () => {
    let a = 0;
    list.map((item) => (a += Number(item.cart_quantity) * item.sale_price));
    return a;
  };

  let orderSuccess = () => {
    dispatchPayment({
      ...payment,
      totalPrice: totalPrice(),
    });
    navigate("/OrderSuccess");
  };

  return (
    <div className="bg-gray-100 p-3 rounded-md justify-between flex flex-col">
      <div>
        <p className="text-xl font-bold mb-4">
          Đơn hàng ({count(list)} sản phẩm)
        </p>
        <div
          className="max-h-96 overflow-auto"
          // style={{ scrollbarWidth: "none" }}
        >
          {list.map((item) => (
            <CardProduct product={item} type={"payment"} />
          ))}
        </div>
        <div className="flex justify-between my-5 bg-white p-3 rounded-md">
          <p>Tổng cộng:</p>
          <p className={`text-${colors.primary} font-bold text-xl`}>
            {totalPrice().toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>
      </div>
      <div className="w-full justify-between flex">
        <button
          className={`text-${colors.primary}`}
          onClick={() =>
            navigate("/Wishlist", {
              state: {
                type: "",
                dataList: list,
              },
            })
          }
        >
          <FontAwesomeIcon icon={faArrowLeftRotate} /> Quay về giỏ hàng
        </button>
        <button
          className={`bg-${colors.primary} p-3 rounded-md text-white px-10`}
          onClick={() => {
            let arr = [];
            for (var key in payment) {
              var value = payment[key];
              if (value === "" || value === undefined) arr.push(key);
            }
            arr.length > 0
              ? alert("Bạn phải nhập đầy đủ các thông tin")
              : payment.paymentMethod === "Thanh toán qua momo"
              ? alert("a")
              : orderSuccess();
            console.log(payment);
          }}
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};
export default CartList;
