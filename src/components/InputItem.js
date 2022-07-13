var InputItem = (props) => {
    var { text, placeholder, setValue, value } = props

    return <div className="flex flex-row m-5 items-center">
        <div style={{minWidth: 150}}>{text}</div>
        <div className="flex flex-1"></div>
        <input className="border border-sky-600 rounded-md p-2"
        placeholder={placeholder} type={text === "Mật khẩu" ? 'password' : ''}
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
    </div>
}

export default InputItem