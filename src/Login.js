import { colors } from "./colors"
import InputItem from "./components/InputItem"
import Button from "./components/Button"
import { useEffect, useState } from "react"
import { login } from "./Data"
import { useNavigate } from "react-router-dom"
import Menu from './components/Menu/Menu'
import Footer from './components/Footer'

var Login = (props) => {
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var [isDisable, setIsDisable] = useState(true)
    
    var token = localStorage.getItem('token')

    var navigate = useNavigate()

    useEffect(() => {
        if (email !== "" && password !== "")
            setIsDisable(false)
        else setIsDisable(true)
    }, [email, password])

    return <div>
        <div className="flex items-center justify-center h-screen bg-cover bg-no-repeat" style={{backgroundImage: 'https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?t=st=1658416852~exp=1658417452~hmac=cf6a1078957763e99e17552bb301548ac5c22364cd10a01631a79f1d3fee5e7d&w=1380")'}}>
            <Menu />
            
            <div className="bg-gray-100 shadow-xl rounded-md flex flex-col">
                <div className={`${colors.bg} py-3 px-20 text-white text-2xl text-center rounded-t-lg`}>Đăng nhập</div>
                <InputItem text="Email" placeholder="abc@gmail.com" setValue={setEmail} value={email}/>
                <InputItem text="Mật khẩu" placeholder="Nhập mật khẩu" setValue={setPassword} value={password}/>
                <Button text="Đăng nhập" isDisable={isDisable} onClick={() => {
                    login(email, password, navigate)
                }}/>

                <div className="flex mb-5 justify-center">
                    <p>Bạn chưa có tài khoản?</p>
                    <button className={`text-${colors.primary} font-bold ml-3`} onClick={() => navigate('/Register')}>Đăng ký</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Login