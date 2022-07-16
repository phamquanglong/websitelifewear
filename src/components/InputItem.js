import { colors } from "../colors"

var InputItem = (props) => {
    var { text, placeholder, setValue, value } = props

    return <div className="flex flex-row m-5 items-center">
        {text !== undefined && text.length > 0 && <div style={{minWidth: 150}}>{text}</div>}
        <input className={`flex flex-1 border border-${colors.primary} rounded-md p-2`}
        placeholder={placeholder} type={text === "Mật khẩu" ? 'password' : ''}
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
    </div>
}

export default InputItem