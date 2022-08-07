import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputItem from "../components/InputItem";
import { getSubdivisions } from "../Data";
import { setPayment } from "../Store/actions";
import { infoSelector, paymentSelector } from "../Store/selectors";

let Infotransfer = (props) => {
  let dispatchRedux = useDispatch();
  let dispatchPayment = (data) => {
    dispatchRedux(setPayment(data));
  };
  let info = useSelector(infoSelector);
  let payment = useSelector(paymentSelector);

  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");

  let [district, setDistrict] = useState("");
  let [districtList, setDistrictList] = useState([]);
  let [city, setCity] = useState("");
  let [cityList, setCityList] = useState([]);
  let [province, setProvince] = useState("");
  let [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    setFullName(info.full_name);
    setEmail(info.email);
    setPhone(info.phone);
    dispatchPayment({
      ...payment,
      full_name: fullName,
      email: email,
      phone: phone,
      city: city,
      province: province,
      district: district,
      address: address,
      shippingUnit: "",
      paymentMethod: "",
    });

    console.log(payment);
  }, [info]);

  return (
    <div className="w-3/4">
      <p className="px-5 font-bold">Thông tin giao hàng</p>
      <InputItem
        placeholder="Họ và tên"
        value={fullName}
        setValue={(value) => {
          setFullName(value);
          dispatchPayment({
            ...payment,
            full_name: value,
          });
        }}
      />
      <InputItem
        placeholder="Email"
        value={email}
        setValue={(value) => {
          setEmail(value);
          dispatchPayment({
            ...payment,
            email: value,
          });
        }}
      />
      <InputItem
        placeholder="Số điện thoại"
        value={phone}
        setValue={(value) => {
          setPhone(value);
          dispatchPayment({
            ...payment,
            phone: value,
          });
        }}
      />
      <InputItem
        placeholder="Địa chỉ"
        value={address}
        setValue={(value) => {
          setAddress(value);
          dispatchPayment({
            ...payment,
            address: value,
          });
        }}
      />
      <div className="p-5">
        <Autocomplete
          disablePortal
          onOpen={() => getSubdivisions("city", "", setCityList)}
          onChange={(event, value) => {
            setCity(value);
            dispatchPayment({
              ...payment,
              city: value,
            });
          }}
          id="combo-box-city"
          options={cityList}
          renderInput={(params) => <TextField {...params} label="Tỉnh" />}
        />
        <Autocomplete
          disablePortal
          onOpen={() => getSubdivisions("province", city.id, setProvinceList)}
          onChange={(event, value) => {
            setProvince(value);
            dispatchPayment({
              ...payment,
              province: value,
            });
          }}
          disabled={city === "" ? true : false}
          id="combo-box-district"
          options={provinceList}
          sx={{
            paddingY: 3,
          }}
          renderInput={(params) => <TextField {...params} label="Quận/Huyện" />}
        />
        <Autocomplete
          disablePortal
          onOpen={() =>
            getSubdivisions("district", province.id, setDistrictList)
          }
          disabled={province === "" ? true : false}
          onChange={(event, value) => {
            setDistrict(value);
            dispatchPayment({
              ...payment,
              district: value,
            });
          }}
          id="combo-box-city"
          options={districtList}
          renderInput={(params) => <TextField {...params} label="Phường/Xã" />}
        />
      </div>
    </div>
  );
};

export default Infotransfer;
