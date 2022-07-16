import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import Popup from "reactjs-popup"
import InputItem from './InputItem'
import { useState } from 'react'
import { colors } from '../colors'
import { useNavigate } from 'react-router-dom'

var SearchBtn = (props) => {
    var [value, setValue] = useState("")
    var navigate = useNavigate()

    return <div className='flex'>
        <Popup modal position="bottom center" trigger={<button className={`text-3xl py-4 px-5 flex items-center rounded-full`}>
            <FontAwesomeIcon icon={faSearch} className={`hover:text-sky-400 cursor-pointer`}/>
        </button>}
        overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        contentStyle={{width: '60%', top: 20, right: 0, left: 0, position: 'absolute'}}>
            <InputItem placeholder="Nhập từ khóa tìm kiếm" setValue={setValue} value={value}/>
            <div className='w-full flex justify-center'>
                <button className={`bg-white hover:bg-${colors.primary} hover:text-white py-2 px-5 rounded-md`}
                onClick={() => navigate('/Search', {state: {value: value}})}>
                    <FontAwesomeIcon icon={faSearch} className="mr-2"/>
                    Tìm kiếm
                </button>
            </div>
        </Popup>
    </div>
}

export default SearchBtn