import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import InputItem from "./InputItem";
import { useState } from "react";
import { colors } from "../colors";
import { useNavigate } from "react-router-dom";

var SearchBtn = (props) => {
  var [value, setValue] = useState("");
  var [isOpen, setIsOpen] = useState(false);
  var navigate = useNavigate();

  return (
    <div className="flex">
      <Popup
        modal
        position="bottom center"
        trigger={
          <button
            className={`hover:text-${colors.primary} text-xl py-4 px-5 flex items-center rounded-full`}
          >
            <FontAwesomeIcon icon={faSearch} className={`cursor-pointer`} />
          </button>
        }
        onOpen={() => setIsOpen(true)}
        open={isOpen}
        overlayStyle={{ backgroundColor: "white" }}
        contentStyle={{ width: "100%" }}
      >
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <button
            className="top-0 text-2xl px-5 py-3 absolute right-0"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>

          <div className="w-1/2">
            <InputItem
              placeholder="Nhập từ khóa tìm kiếm"
              setValue={setValue}
              value={value}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              className={`bg-white hover:bg-${colors.hover} py-2 px-5 rounded-md`}
              onClick={() => {
                navigate("/Search", { state: { value: value } });
                setIsOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Tìm kiếm
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default SearchBtn;
