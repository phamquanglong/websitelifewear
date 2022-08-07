import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../colors";
import Menu from "../components/Menu/Menu";
import { uploadAvatar } from "../Data";
import { infoSelector } from "../Store/selectors";
import InfoItem from "./InfoItem";
import ReactLoading from "react-loading";
import Footer from "../components/Footer";
import { setcartCount, setInfo, setWishlistCount } from "../Store/actions";
import AccountBtnItem from "../components/Account/AccountBtnItem";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

let Info = (props) => {
  let info = useSelector(infoSelector);

  let [value, setValue] = useState(0);
  var dispatchRedux = useDispatch();
  var dispatchCart = (data) => {
    dispatchRedux(setcartCount(data));
  };

  var dispatchWishlist = (data) => {
    dispatchRedux(setWishlistCount(data));
  };

  let dispatchInfo = (data) => {
    dispatchRedux(setInfo(data));
  };

  var [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  let [fullName, setFullName] = useState();
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState(0);
  let [phone, setPhone] = useState("");
  let [dob, setDob] = useState("");

  useEffect(() => {
    setFullName(info.full_name);
    setEmail(info.email);
    setGender(info.gender);
    setPhone(info.phone);
    setDob(info.dob);
  }, [value, info]);

  return (
    <>
      <div className="">
        <Menu />
        <div className="pt-40 w-full items-center flex flex-col h-screen">
          <p className="text-3xl font-bold uppercase mb-10">
            Thông tin tài khoản
          </p>
          <div className="flex w-2/3">
            <div className="items-center flex flex-col bg-gray-100 p-3 rounded-md">
              <input
                onChange={(value) =>
                  uploadAvatar(
                    localStorage.getItem("token"),
                    value.target.value
                  )
                }
                type="file"
                className="w-40 h-40 bg-cover bg-gray-200 rounded-full flex w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700 items-center"
                style={{
                  backgroundImage: `url(${
                    info.avatar !== null
                      ? info.avatar
                      : "http://localhost:8000/storage/images/users/default-user.png"
                  })`,
                }}
              ></input>
              <p className="text-xl text-center my-3">{info.full_name}</p>

              <Popup
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                modal
                position="center center"
                trigger={
                  <button
                    className={`px-20 py-3 bg-${colors.primary} rounded-full text-white`}
                  >
                    Đăng xuất
                  </button>
                }
                overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                contentStyle={{ width: "40%" }}
              >
                <div className="bg-white rounded-md p-5">
                  <p className="text-xl">
                    Bạn có chắc muốn đăng xuất tài khoản hiện tại không?
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                        dispatchCart([]);
                        dispatchWishlist([]);
                        dispatchInfo({});
                        setIsOpen(false);
                        navigate("/");
                      }}
                      className="px-5 py-3 bg-red-400 rounded-md text-white"
                    >
                      Đăng xuất
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        // setVisible(false);
                      }}
                      className="ml-5"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </Popup>

              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderColor: `${colors.primary}` }}
                className="w-full mt-5"
              >
                <Tab label="Họ tên" {...a11yProps(0)} />
                <Tab label="Email" {...a11yProps(1)} />
                <Tab label="Giới tính" {...a11yProps(2)} />
                <Tab label="Số điện thoại" {...a11yProps(3)} />
                <Tab label="Ngày sinh" {...a11yProps(4)} />
              </Tabs>
            </div>

            <InfoItem
              value={value}
              index={0}
              data={
                value === 0
                  ? [fullName, setFullName]
                  : value === 1
                  ? [email, setEmail]
                  : value === 2
                  ? [gender, setGender]
                  : value === 3
                  ? [phone, setPhone]
                  : [dob, setDob]
              }
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Info;
