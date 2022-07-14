import MenuItem from "./MenuItem"
import AccountBtn from "../Account/AccountBtn"
import SearchBtn from "../SearchBtn"
import { getCategories } from "../../Data"
import { useState, useEffect } from "react"

var Menu = (props) => {
    var [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories(setCategories)
    }, [])

    return <div className="flex flex-row justify-evenly">
        <MenuItem text={"Yêu thích"} url={"Wishlist"}/>
        <MenuItem text={"Giới thiệu"} url={"About"}/>
        <MenuItem text={"Lifewear"} url={""}/>
        <MenuItem text={"Danh mục"} url={"Categories"} categories={categories}/>
        <div className="flex flex-row items-end width-full items-center">
            <AccountBtn />
            <SearchBtn />
        </div>
    </div>
}

export default Menu