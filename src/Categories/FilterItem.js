import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { colors } from "../colors"
import { 
    faArrowDown,
    faArrowUp
 } from "@fortawesome/free-solid-svg-icons"
import RangeSlider from "./RangeSlider"

var FilterItem = (props) => {
    var { data, name, setValue, setData, rangePrice } = props
    var [isVisible, setIsVisible] = useState(true)

    var filterSize = (item) => {
        var size = data.filter(i => i.isChoose === true)
                setData(data)
                setValue(size.map(item => {return item.name}).toString())
                var cloneProducts = data.map(i => {
                    if (i.name === item.name)
                        return {
                            ...i,
                            isChoose: 
                            i.isChoose === false || i.isChoose === undefined
                            ? true : false
                        }
                    return i
                })

                setData(cloneProducts)
    }

    return <div className="bg-gray-200 rounded-md w-full h-fit p-2 mb-5">
        <div className="bg-sky-400 p-3 h-fit w-full rounded-md text-white justify-between flex items-center" onClick={() => setIsVisible(!isVisible)}>
            {name}
            <FontAwesomeIcon icon={isVisible ? faArrowUp : faArrowDown}/>
        </div>
        {isVisible && (name !== 'Khoảng giá' ? <div className="flex flex-row max-w-xs flex-wrap">
            {data.map(item => <div className={item.isChoose !== undefined && item.isChoose !== false ? `bg-${colors.primary} mx-3 px-5 py-3 mt-3 rounded-md text-white hover:cursor-pointer` 
            : `bg-white mx-3 px-5 py-3 mt-3 rounded-md hover:text-${colors.primary} cursor-pointer`}
            onClick={() => {
                filterSize(item)
            }}>{item.name}</div>)}
        </div> : <RangeSlider setRangePrice={setValue} rangePrice={rangePrice}/>)}
    </div>
}

export default FilterItem