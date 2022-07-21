import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../colors"

var CartBtn = (props) => {
    return <button className={`text-xl py-4 px-5 hover:text-${colors.primary}`}>
        <FontAwesomeIcon icon={faCartShopping}/>
    </button>
}

export default CartBtn