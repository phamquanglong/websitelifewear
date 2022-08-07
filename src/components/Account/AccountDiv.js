import { colors } from "../../colors";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignature,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

var AccountDiv = (props) => {
  var { setVisible } = props;
  var navigate = useNavigate();

  return (
    <div className="absolute left-0">
      <div className="w-screen h-screen" onClick={() => setVisible("")}></div>
      <div className="absolute flex flex-row top-0 right-32 shadow-lg rounded-lg items-center z-10 bg-white">
        <div
          className={`p-5 hover:text-${colors.primary} cursor-pointer`}
          onClick={() => {
            navigate("/Login");
            setVisible("");
          }}
        >
          <FontAwesomeIcon icon={faSignInAlt} className="mr-3" />
          Đăng nhập
        </div>
        <div>|</div>
        <div
          className={`p-5 hover:text-${colors.primary} cursor-pointer`}
          onClick={() => {
            navigate("/Register");
            setVisible("");
          }}
        >
          <FontAwesomeIcon icon={faSignature} className="mr-3" />
          Đăng ký
        </div>
      </div>
    </div>
  );
};

export default AccountDiv;
