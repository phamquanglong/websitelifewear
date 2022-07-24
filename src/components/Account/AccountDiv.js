import { colors } from "../../colors";
import { useNavigate } from "react-router-dom";

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
          Đăng ký
        </div>
      </div>
    </div>
  );
};

export default AccountDiv;
