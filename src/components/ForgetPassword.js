import { useState } from "react";
import { useLocation } from "react-router-dom";
import { colors } from "../colors";
import { getResetCode } from "../Data";
import InputItem from "./InputItem";
import Menu from "./Menu/Menu";

let ForgetPassword = (props) => {
  let state = useLocation();
  let { label, text } = state.state;
  let [value, setValue] = useState("");

  return (
    <div className="flex items-center h-screen">
      <Menu />
      <div className="flex-col flex justify-center items-center w-screen">
        <p className="uppercase text-3xl font-bold my-5">{label}</p>
        <div className="flex items-center">
          <InputItem placeholder={text} value={value} setValue={setValue} />
          <button
            onClick={() => getResetCode(value)}
            className={`bg-${colors.primary} mt-5 mr-5 px-5 py-4 text-white rounded-md`}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
