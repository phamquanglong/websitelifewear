import { useState } from "react";
import { colors } from "../colors";

var Options = (props) => {
  var { options, text, value, setValue } = props;

  var isChoose = (name) => {
    if (
      options.length > 0 &&
      options.filter((item) => item.name === value).length > 0
    )
      return options.filter((item) => item.name === value)[0].name === name
        ? true
        : false;
  };

  return (
    <div className="my-10">
      <p className="mb-5 flex">
        {text}:{" "}
        <p className={`text-${colors.primary} ml-5 font-bold`}>{value}</p>
      </p>
      {options.map((item) =>
        item.cover !== undefined ? (
          <button
            style={{ backgroundImage: `url(${item.cover})` }}
            onClick={() => {
              setValue(item.name);
            }}
            className={`${
              item.name !== undefined && isChoose(item.name)
                ? `border-${colors.primary}`
                : ""
            } rounded-full h-10 w-10 bg-cover mx-2 border-2`}
          />
        ) : (
          <button
            className={`px-5 py-3 bg-gray-200 hover: hover:text-${
              colors.primary
            } mx-2 rounded-md
        ${
          item.name !== undefined && isChoose(item.name)
            ? `bg-${colors.primary} text-white`
            : ""
        }`}
            onClick={() => setValue(item.name)}
          >
            {item.name}
          </button>
        )
      )}
    </div>
  );
};

export default Options;
