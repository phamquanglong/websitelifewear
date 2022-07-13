import { colors } from "../colors"

var Button = (props) => {
    var { text, onClick, isDisable } = props

    return <div className={`${isDisable ? 'border text-sky-400 border-sky-400 pointer-events-none' : colors.bg + " text-white border border-sky-400"} flex justify-center p-3 m-5 hover:cursor-pointer`}
    onClick={onClick}>
        {text}
    </div>
}

export default Button