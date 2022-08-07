import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { colors } from "../colors";

var LoginRequest = (props) => {
  var { setVisible } = props;

  var navigate = useNavigate();

  return (
    <div className="absolute left-0">
      <div className="w-screen h-screen" onClick={() => setVisible("")}></div>
      <div
        className={`absolute flex right-5 top-0 bg-white shadow-md p-5 flex-col rounded-md text-gray-600 items-center w-96`}
      >
        <p className="text-6xl">
          <FontAwesomeIcon icon={faLock} />
        </p>
        <p>Bạn cần đăng nhập để sử dụng tính năng này</p>
        <button
          onClick={() => {
            navigate("/Login");
            setVisible("");
          }}
          className={`px-5 py-4 bg-${colors.primary} rounded-md mt-5 w-full text-white`}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginRequest;
