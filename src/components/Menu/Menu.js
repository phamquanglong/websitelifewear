import MenuItem from "./MenuItem"
import AccountBtn from "../Account/AccountBtn"
import SearchBtn from "../SearchBtn"
import { getCategories } from "../../Data"
import { useState, useEffect } from "react"
import { getInfo } from '../../Data'
import { useDispatch } from 'react-redux';
import { setInfo } from "../../Store/actions"
import CartBtn from "../CartBtn"
import lifewear from '../../img/lifewear.jpg'
import WhislistBtn from "../WhislistBtn"
import { useNavigate } from "react-router-dom"
import { colors } from "../../colors"

var Menu = (props) => {
    var [categories, setCategories] = useState([])
    var [categoriesOld, setCategoriesOld] = useState([])

    var dispatchRedux = useDispatch();

    var dispatchHandler = (info) => {
      dispatchRedux(setInfo(info))
    }

    var localInfo = localStorage.getItem('token')

    var navigate = useNavigate()

    useEffect(() => {
        getCategories(setCategories, setCategoriesOld)
        localInfo !== null && getInfo(localInfo, dispatchHandler)
    }, [])

    // flex flex-row justify-between fixed w-full z-10 bg-white top-0

    return <div className="justify-between fixed w-full z-10 top-0">
        <div className="flex flex-row justify-between bg-white top-0">
            <div className="items-center flex" style={{width: 180}}><SearchBtn /></div>
            <div className="flex">
                <MenuItem text={"Danh mục"} url={"Categories"} categories={categories} setCategories={setCategories} categoriesOld={categoriesOld}/>
                <div className="h-24 w-96 bg-cover cursor-pointer" style={{backgroundImage: `url("${lifewear}")`}} onClick={() => navigate('/')}></div>
                <MenuItem text={"Giới thiệu"} url={"About"}/>
            </div>
            <div className="flex flex-row items-end width-full items-center">
                <AccountBtn />
                <CartBtn />
                <WhislistBtn />
            </div>
        </div>

        <div className={`flex bg-${colors.hover} w-full h-0.5`}></div>
    </div>
}

export default Menu