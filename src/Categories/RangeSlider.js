import { Slider } from "@mui/material"
import { useState } from "react";
import { colors } from "../colors";

var RangeSlider = (props) => {
    var { setRangePrice, rangePrice } = props

    const [value, setValue] = useState([0, 999000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setRangePrice(newValue)
      };

    return <div className="m-3">
        <div className="my-2 flex flex-rơw justify-between">Lớn nhất: 
            <div className={`text-${colors.primary}`}>
                {rangePrice.length !== 0
                ? rangePrice[1].toLocaleString('vi', {style : 'currency', currency : 'VND'})
                : value[1].toLocaleString('vi', {style : 'currency', currency : 'VND'})}
            </div>
        </div>
        <div className="my-2 flex flex-rơw justify-between">Nhỏ nhất: 
            <div className={`text-${colors.primary}`}>
                {rangePrice.length !== 0 
                ? rangePrice[0].toLocaleString('vi', {style : 'currency', currency : 'VND'}) 
                : value[0].toLocaleString('vi', {style : 'currency', currency : 'VND'})}
            </div>
        </div>
        <Slider
            // defaultValue={[23, 500000]}
            max={999000}
            min={0}
            getAriaLabel={() => 'Temperature range'}
            value={rangePrice.length === 0 ? value : rangePrice}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={10000}
        />
    </div>
}

export default RangeSlider