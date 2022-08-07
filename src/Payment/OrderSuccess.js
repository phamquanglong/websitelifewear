import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { paymentSelector } from "../Store/selectors";
import lifewear from "../img/lifewear.jpg";
import { colors } from "../colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

let OrderSuccess = (props) => {
  let payment = useSelector(paymentSelector);

  let navigate = useNavigate();

  useEffect(() => {}, [payment]);

  let textList = [
    "Họ tên",
    "Email",
    "Số điện thoại",
    "Tỉnh",
    "Quận/Huyện",
    "Phường/Xã",
    "Địa chỉ",
    "Đơn vị vận chuyển",
    "Hình thức thanh toán",
    "Tổng tiền phải thanh toán",
  ];

  let getPaymenttInfo = () => {
    let arr = [];
    for (let i in payment) {
      arr.push(payment[i]);
    }
    return arr;
  };

  return (
    <div
      className={`flex items-center flex-col justify-center h-screen bg-${colors.primary}`}
    >
      <div className="bg-gray-100 p-5 rounded-md flex-col items-center flex">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={`text-8xl text-${colors.primary}`}
        />
        <p className={`text-3xl font-bold my-5 text-${colors.primary}`}>
          Đặt hàng thành công!!!
        </p>
        <p>
          Theo dõi đơn hàng của bạn trong mục{" "}
          <button className={`text-${colors.primary}`}>Đơn mua</button> nhé!
        </p>
        <p className="font-bold my-5">Thông tin đơn hàng</p>
        <div className="flex">
          <div>
            {textList.map((item, index) => (
              <div>
                <p className="py-3 font-bold">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end flex-col bg-white rounded-md ml-5 px-5">
            {getPaymenttInfo() !== undefined &&
              getPaymenttInfo().map((item) =>
                item.label === undefined ? (
                  isNaN(item) ? (
                    <p className="py-3">{item}</p>
                  ) : (
                    <p className={`py-3 font-bold text-${colors.primary}`}>
                      {item.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  )
                ) : (
                  <p className="py-3">{item.label}</p>
                )
              )}
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className={`w-full bg-${colors.primary} mt-5 py-3 text-white rounded-full`}
        >
          Quay về trang chủ
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
