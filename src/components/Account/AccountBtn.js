import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../colors";
import AccountDiv from "./AccountDiv";
import AccountDivLogin from "./AccountDivLogin";

var AccountBtn = (props) => {
  var { visible, setVisible } = props;
  var token = localStorage.getItem("token");

  return (
    <div className="flex">
      <button
        className={`text-xl py-4 px-5 flex items-center rounded-full hover:text-${colors.primary}`}
        onClick={() => setVisible(!visible)}
      >
        <FontAwesomeIcon icon={faUser} className={`cursor-pointer`} />
      </button>

      {visible &&
        (token === null ? (
          <AccountDiv setVisible={setVisible} />
        ) : (
          <AccountDivLogin setVisible={setVisible} />
        ))}
    </div>
  );
};

export default AccountBtn;
