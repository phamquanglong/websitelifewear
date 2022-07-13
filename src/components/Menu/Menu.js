import MenuItem from "./MenuItem"
import AccountBtn from "../Account/AccountBtn"
import SearchBtn from "../SearchBtn"

var Menu = (props) => {
    return <div className="flex flex-row justify-evenly">
        <MenuItem text={"Yêu thích"} url={"Wishlist"}/>
        <MenuItem text={"Giới thiệu"} url={"About"}/>
        <MenuItem text={"Lifewear"} url={""}/>
        <MenuItem text={"Danh mục"} url={"Categories"}/>
        <div className="flex flex-row items-end width-full items-center">
            <AccountBtn />
            <SearchBtn />
        </div>
    </div>
}

export default Menu