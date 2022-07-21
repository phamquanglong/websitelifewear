import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../colors';

var AccountBtnItem = (props) => {
    var { icon, text, onClick } = props

    return <button className={`p-5 flex items-center hover:bg-${colors.hover} hover:rounded-md w-full ${text === 'Đăng xuất' && 'text-red-400'}`} onClick={onClick}>
        <FontAwesomeIcon icon={icon}/><p className='ml-3'>{text}</p>
    </button>
}

export default AccountBtnItem