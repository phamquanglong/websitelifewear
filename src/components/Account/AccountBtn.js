import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../colors'
import AccountDiv from './AccountDiv'
import AccountDivLogin from './AccountDivLogin'

var AccountBtn = (props) => {
    var [visible, setVisible] = useState(false)
    var token = localStorage.getItem('token')

    return <>
        <button className={`text-xl py-4 px-5 flex items-center rounded-full hover:text-${colors.primary}`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <FontAwesomeIcon icon={faUser} className={`cursor-pointer`}/>
        </button>
        
        {visible && (token === null ? <AccountDiv setVisible={setVisible}/> : <AccountDivLogin setVisible={setVisible}/>)}
    </>
}

export default AccountBtn