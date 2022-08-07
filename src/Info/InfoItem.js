import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { colors } from "../colors";
import InputItem from "../components/InputItem";
import { updateInfo } from "../Data";
import { setInfo } from "../Store/actions";
import Datepicker from "./Datepicker";
import Gender from "./Gender";

let InfoItem = (props) => {
  let { value, data } = props;

  let dispatchRedux = useDispatch();
  let dispatchInfo = (data) => {
    dispatchRedux(setInfo(data));
  };

  let text = () => {
    if (value === 0) return "Họ tên";
    else if (value === 1) return "Email";
    else if (value === 2) return "Giới tính";
    else if (value === 3) return "Số điện thoại";
    else if (value === 4) return "Ngày sinh";
  };

  let fullName = value == 0 && data[0] !== undefined && data[0].split(" ");

  let propFullname = `{"first_name": "${fullName[0]}", "last_name": "${fullName[1]}"}`;

  let prop = value == 1 ? "email" : value == 3 ? "phone" : "dob";

  let propGender =
    value == 2 && data[0] == "Nam" ? `{"gender": 0}` : `{"gender": 1}`;

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  useEffect(() => {}, [value]);

  return (
    <div className="ml-10 bg-gray-100 rounded-md p-3 flex flex-col flex-1">
      <div>
        <p>Thông tin cá nhân</p>
        <div className="h-0.5 bg-gray-200 mt-2"></div>
        <div>
          {value === 2 ? (
            <Gender value={data[0]} setValue={data[1]} />
          ) : value === 4 ? (
            <Datepicker value={data[0]} setValue={data[1]} />
          ) : (
            <InputItem
              text={text()}
              value={data[0] === null ? "" : data[0]}
              setValue={data[1]}
            />
          )}
        </div>
      </div>
      <div className="flex-1 flex"></div>

      <div className="flex w-full justify-end">
        <button
          onClick={() =>
            updateInfo(
              localStorage.getItem("token"),
              value == 0
                ? propFullname
                : value == 2
                ? propGender
                : `{"${prop}": "${value == 4 ? convert(data[0]) : data[0]}"}`,
              dispatchInfo
            )
          }
          className={`p-3 bg-${colors.primary} text-white rounded-md px-10`}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default InfoItem;
