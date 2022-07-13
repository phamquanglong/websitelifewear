import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../colors'
import AccountDiv from './AccountDiv'

var AccountBtn = (props) => {
    var [visible, setVisible] = useState(false)

    return <>
        <div className={`text-3xl py-4 px-5 flex items-center rounded-full`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <FontAwesomeIcon icon={faUser} className={`hover:text-sky-400 cursor-pointer`}/>
        </div>
        
        {visible && <AccountDiv setVisible={setVisible}/>}
    </>
}

export default AccountBtn