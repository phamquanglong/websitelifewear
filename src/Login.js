import { colors } from "./colors"
import InputItem from "./components/InputItem"
import Button from "./components/Button"
import { useEffect, useState } from "react"

var Login = (props) => {
    var [name, setName] = useState("")
    var [password, setPassword] = useState("")
    var [isDisable, setIsDisable] = useState(true)

    useEffect(() => {
        if (name !== "" && password !== "")
            setIsDisable(false)
        else setIsDisable(true)
    }, [name, password])

    return <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-100 shadow-xl rounded-md">
            <div className={`${colors.bg} py-3 px-20 text-white text-2xl text-center rounded-t-lg`}>Đăng nhập</div>
            <InputItem text="Tên đăng nhập" placeholder="abc..." setValue={setName} value={name}/>
            <InputItem text="Mật khẩu" placeholder="Nhập mật khẩu" setValue={setPassword} value={password}/>
            <Button text="Đăng nhập" isDisable={isDisable} onClick={() => {
                alert(`${name}, ${password}`)
            }}/>
        </div>
    </div>
}

export default Login