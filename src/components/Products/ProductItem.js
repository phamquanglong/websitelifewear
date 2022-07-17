import { useState } from "react"
import { useNavigate } from "react-router-dom"

var ProductItem = (props) => {
    var { item, margin } = props
    var [isVisible, setIsVisible] = useState(false)
    var navigate = useNavigate()
    var mg = margin ? 'mx-1.5 mb-20' : ''

    // console.log(item)
    return <div className={`w-1/6 bg-gray-100 rounded-md shadow-xl h-96 relative ${mg} hover:cursor-pointer`}
    style={{
        backgroundImage: `url("${item.cover}")`,
        minWidth: 280
    }}
    onClick={() => {
        navigate('/Details', {state: {id: item.id}})
    }}
    onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>

        {isVisible === true && <div>
            <div className="absolute bg-black w-full h-full top-0 rounded-md opacity-25 flex"></div>
            <div className="text-white absolute text-xl bottom-0 w-full bg-black p-5 rounded-b-lg">
                {item.name}
                <div className="flex flex-row justify-between py-3">
                    <div className="line-through">{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                    <div className="text-sky-400">{item.sale_price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                </div>
            </div>
        </div>}
    </div>
}

export default ProductItem