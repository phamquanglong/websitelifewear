import { colors } from "./colors"
import InputItem from "./components/InputItem"
import Button from "./components/Button"
import { useEffect, useState } from "react"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

var Register = (props) => {
    const gd = [
        'Nam', 'Nữ'
    ]

    var [name, setName] = useState("")
    var [password, setPassword] = useState("")
    var [confirmPassword, setConfirmPassword] = useState("")
    var [firstName, setFirstName] = useState("")
    var [lastName, setLastName] = useState("")
    var [gender, setGender] = useState(gd[0])

    var [isDisable, setIsDisable] = useState(true)

    var navigate = useNavigate()

    useEffect(() => {
        if (name !== "" && password !== "" && confirmPassword !== "" && firstName !== "" && lastName !== "")
            setIsDisable(false)
        else setIsDisable(true)
    }, [name, password, confirmPassword])

    return <div>
        <div className="flex items-center justify-center h-screen">
            <Menu />
            <div className="bg-gray-100 shadow-xl rounded-md">
                <div className={`${colors.bg} py-3 px-20 text-white text-2xl text-center rounded-t-lg`}>Đăng ký</div>
                <div className="flex">
                    <InputItem placeholder="Họ" setValue={setFirstName} value={firstName}/>
                    <InputItem placeholder="Tên" setValue={setLastName} value={lastName}/>
                </div>
                <InputItem text="Email" placeholder="abc@gmail.com" setValue={setName} value={name}/>
                <div className="flex items-center mx-5 mt-5">
                    <p style={{minWidth: 150}}>Giới tính</p>
                    <Dropdown className="flex-1" options={gd} onChange={(value) => setGender(value)} value={gender} />
                </div>
                <InputItem text="Mật khẩu" placeholder="Nhập mật khẩu" setValue={setPassword} value={password}/>
                <InputItem text=" Xác nhận mật khẩu" placeholder="Xác nhận mật khẩu" setValue={setConfirmPassword} value={confirmPassword}/>
                <Button text="Đăng ký" isDisable={isDisable} onClick={() => {
                    alert(`${name}, ${password}, ${confirmPassword}`)
                }}/>

                <div className="flex mb-5 justify-center">
                    <p>Bạn đã có tài khoản?</p>
                    <button className={`text-${colors.primary} font-bold ml-3`} onClick={() => navigate('/Login')}>Đăng nhập</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Register