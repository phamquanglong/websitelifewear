import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TransferItem from "../ProductDetails/TransferItem";
import { setPayment } from "../Store/actions";
import { paymentSelector } from "../Store/selectors";

let ShippingUnit = (props) => {
  let dispatchRedux = useDispatch();
  let dispatchPayment = (data) => {
    dispatchRedux(setPayment(data));
  };

  let payment = useSelector(paymentSelector);

  return (
    <div>
      <FormControl>
        <p className="font-bold">Đơn vị vận chuyển</p>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          onChange={(event, value) =>
            dispatchPayment({
              ...payment,
              shippingUnit: value,
            })
          }
        >
          <div className="flex items-center">
            <FormControlLabel
              //   value="female"
              control={<Radio />}
              value="Giao hàng nhanh"
            ></FormControlLabel>
            <TransferItem
              image="https://suno.vn/blog/wp-content/uploads/2018/11/141139logos-768x274.jpg"
              url="https://ghn.vn/"
            />
          </div>
          <div className="flex items-center">
            <FormControlLabel
              //   value="male"
              control={<Radio />}
              value="Giao hàng tiết kiệm"
            ></FormControlLabel>
            <TransferItem
              image="https://suno.vn/blog/wp-content/uploads/2018/11/giao-hang-tiet-kiem.png"
              url="https://giaohangtietkiem.vn/"
            />
          </div>
          <div className="flex items-center">
            <FormControlLabel
              //   value="other"
              control={<Radio />}
              value="Kerry express"
            ></FormControlLabel>
            <TransferItem
              image="https://suno.vn/blog/wp-content/uploads/2018/11/partner_kerry-768x245.png"
              url="https://kerryexpress.com.vn/"
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ShippingUnit;
