import { colors } from "../colors"

var Quantity = (props) => {
    var { quantity, setQuantity } = props

    return <div className="flex items-center rounded-full border w-fit">
        <button className={`p-3 bg-gray-200 px-5 rounded-l-full hover:text-${colors.primary}`}
        onClick={() => setQuantity(quantity + 1)}>+</button>
        <input className="text-center focus:outline-none w-14" value={quantity} 
        onChange={(text) => setQuantity(Number(text.target.value))}/>
        <button className={`p-3 bg-gray-200 px-5 rounded-r-full hover:text-${colors.primary}`} disabled={quantity <= 1}
        onClick={() => setQuantity(quantity - 1)}>-</button>
    </div>
}

export default Quantity