import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { colors } from '../../colors'
import { fadeIn, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import LinesEllipsis from 'react-lines-ellipsis'

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeOut: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeOut, 'fadeOut')
    },
}

var ProductItem = (props) => {
    var { item, margin } = props
    var [isVisible, setIsVisible] = useState(false)
    var navigate = useNavigate()
    var mg = margin ? 'mx-4' : ''

    // console.log(item)
    return <div className="flex flex-col items-center">
        <div className={`relative`}>
            <div className={`rounded-md shadow-xl h-80 ${mg} hover:cursor-pointer bg-cover relative`}
            style={{
                backgroundImage: `url("${item.cover}")`,
                width: 250
            }}
            onClick={() => {
                navigate('/Details', {state: {id: item.id}})
            }}
            onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            </div>
            {isVisible === true && <StyleRoot>
                <div className="absolute w-fit h-ful right-4 top-0 rounded-md flex flex-col items-end" style={styles.fadeIn}
                onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                    <button className="bg-white h-fit px-3 py-2 rounded-full m-2"
                    onClick={() => alert("a")}><FontAwesomeIcon icon={faHeart}/></button>
                    <button className="bg-white h-fit px-3 py-2 rounded-full m-2"><FontAwesomeIcon icon={faPlusCircle}/></button>
                </div>
            </StyleRoot>}
        </div>

        <div className="bottom-0 w-full py-5 rounded-b-lg w-xs" style={{maxWidth: 250}}>
            <LinesEllipsis
                className="text-center px-2 h-10"
                text={item.name}
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='letters'
            />
            <div className="flex flex-row justify-center p-3 items-center">
                <div className={`text-${colors.primary} font-bold mr-5 text-xl`}>{item.sale_price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                <div className="line-through">{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
            </div>
        </div>
    </div>
}

export default ProductItem