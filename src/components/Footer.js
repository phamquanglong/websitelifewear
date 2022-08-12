import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { colors } from "../colors";

var Footer = (props) => {
  var navigate = useNavigate();

  return (
    <div className={`w-full flex bg-${colors.primary} px-20 flex-col`}>
      <div className="flex flex-row justify-evenly">
        <div className="max-w-md p-5">
          “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
          hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn cùng
          Lifewear tiến bước”
          <div className="flex  my-20">
            <a href="https://www.facebook.com/profile.php?id=100013847670399">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-4xl mr-5 hover:text-white"
              />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-4xl mr-5 hover:text-white"
              />
            </a>
            <a href="https://twitter.com/home">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-4xl mr-5 hover:text-white"
              />
            </a>

            <a href="https://www.youtube.com/">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-4xl mr-5 hover:text-white"
              />
            </a>
          </div>
        </div>

        <div className="min-w-300 p-5">
          <div className="font-bold text-xl mb-5">Về Lifewear</div>
          <div
            className="my-3 hover:text-white cursor-pointer"
            onClick={() => navigate("/About")}
          >
            Giới thiệu
          </div>
          <div className="my-3 hover:text-white cursor-pointer">Liên hệ</div>
        </div>

        <div className="max-w-md p-5">
          <div className="font-bold text-xl mb-5">Hỗ trợ khách hàng</div>
          <div className="my-3 hover:text-white cursor-pointer">
            Chính sách đổi/trả
          </div>
          <div className="my-3 hover:text-white cursor-pointer">
            Chính sách khách hàng thân thiết
          </div>
          <div className="my-3 hover:text-white cursor-pointer">
            Chính sách bảo mật
          </div>
          <div className="my-3 hover:text-white cursor-pointer">
            Hướng dẫn chọn size
          </div>
        </div>

        <div className="max-w-md p-5 content-between">
          <div className="flex flex-row mb-5">
            <FontAwesomeIcon icon={faLocation} className="mr-5 mt-2" />
            <div>
              <p>Công ty cổ phần Thời trang Lifewear</p>
              <p>Mã số thuế: 0801206940</p>
              <p>
                Địa chỉ: Đường An Định - Phường Việt Hoa - Thành phố Hải Dương -
                Hải Dương
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <FontAwesomeIcon icon={faMailBulk} className="mr-5 mt-2" />
            <div>lifewear@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="text-white font-bold my-5 text-center">
        @Designed by phamquanglong
      </div>
    </div>
  );
};

export default Footer;
