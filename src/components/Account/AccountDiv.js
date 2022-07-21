import { colors } from "../../colors"
import { useNavigate } from 'react-router-dom'

var AccountDiv = (props) => {
    var { setVisible } = props
    var navigate = useNavigate()

    return <>
        <div className="absolute flex flex-row top-16 right-20 shadow-lg rounded-lg items-center z-10 bg-white"
        onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <div className={`p-5 hover:text-${colors.primary} cursor-pointer`}
            onClick={() => navigate('/Login')}>Đăng nhập</div>
            <div>|</div>
            <div className={`p-5 hover:text-${colors.primary} cursor-pointer`}
            onClick={() => navigate('/Register')}>Đăng ký</div>
        </div>
    </>
}

export default AccountDiv