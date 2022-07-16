import MenuItem from "./MenuItem"
import AccountBtn from "../Account/AccountBtn"
import SearchBtn from "../SearchBtn"
import { getCategories } from "../../Data"
import { useState, useEffect } from "react"

var Menu = (props) => {
    var [categories, setCategories] = useState([])
    var [categoriesOld, setCategoriesOld] = useState([])

    useEffect(() => {
        getCategories(setCategories, setCategoriesOld)
    }, [])

    return <div className="flex flex-row justify-evenly fixed w-full z-10 bg-white top-0">
        <MenuItem text={"Danh mục"} url={"Categories"} categories={categories} setCategories={setCategories} categoriesOld={categoriesOld}/>
        <MenuItem text={"Yêu thích"} url={"Wishlist"}/>
        <MenuItem text={"Lifewear"} url={""}/>
        <MenuItem text={"Giới thiệu"} url={"About"}/>
        <div className="flex flex-row items-end width-full items-center">
            <AccountBtn />
            <SearchBtn />
        </div>
    </div>
}

export default Menu