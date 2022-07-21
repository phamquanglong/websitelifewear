import { faBasketShopping, faBed, faBell, faInfoCircle, faRing, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { colors } from '../../colors';
import { infoSelector } from '../../Store/selectors';
import AccountBtnItem from './AccountBtnItem';

var AccountDivLogin = (props) => {
    var { setVisible } = props
    var info = useSelector(infoSelector)

    var [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
    }, [])

    return <div className="absolute flex flex-col top-16 right-20 shadow-lg rounded-lg items-center z-10 bg-white"
    onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        <div className="flex flex-row p-5 hover:bg-gray-200 w-full justify-center items-center">
            <div className='w-12 h-12 bg-cover border border-black mr-3 rounded-full' 
            style={{backgroundImage: `url(${info.avatar !== null ? info.avatar : 'https://api.lifewear.mn07.xyz/storage/images/users/default-user.png'})`}}></div>
            <div>{info.full_name}</div>
        </div>
        <div className='bg-gray-200 h-0.5 w-40'></div>
        <AccountBtnItem icon={faInfoCircle} text='Thông tin cá nhân'/>
        <AccountBtnItem icon={faBell} text='Thông báo'/>
        <AccountBtnItem icon={faBasketShopping} text='Đơn mua'/>
        <Popup open={isOpen} onOpen={() => setIsOpen(true)} modal position="center center" trigger={<AccountBtnItem icon={faSignOut} text='Đăng xuất' />} 
        overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        contentStyle={{width: '40%'}}>
            <div className='bg-white rounded-md p-5'>
                <p className='text-xl'>Bạn có chắc muốn đăng xuất tài khoản hiện tại không?</p>
                <div className='flex justify-end'>
                    <button onClick={() => {
                        localStorage.removeItem('token')
                        console.log(localStorage.getItem('token'))
                        setIsOpen(false)
                        setVisible(false)
                    }} className="px-5 py-3 bg-red-400 rounded-md text-white">Đăng xuất</button>
                    <button onClick={() => {
                        setIsOpen(false)
                        setVisible(false)
                    }} className="ml-5">Hủy</button>
                </div>
            </div>
        </Popup>
    
    </div>
}

export default AccountDivLogin