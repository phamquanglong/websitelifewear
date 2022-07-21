import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../colors"

var WhislistBtn = (props) => {
    return <button className={`text-xl py-4 px-5 hover:text-${colors.primary}`}>
        <FontAwesomeIcon icon={faHeart}/>
    </button>
}

export default WhislistBtn