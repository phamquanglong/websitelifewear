import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { colors } from "../../colors"
import CategoriesDiv from "./CategoriesDiv"


var MenuItem = (props) => {
    var { text, url, categories, setCategories, categoriesOld } = props

    var [isVisible, setIsVisible] = useState(false)

    var setText = text === 'Lifewear' ? 'text-3xl font-bold' : 'font-bold'
    var navigate = useNavigate()

    return <>
        <div className={`p-5 ${setText} items-center relative hover:text-${colors.primary} cursor-pointer flex justify-center`} onClick={() => navigate(`/${url}`)}
        onMouseEnter={() => {
            if (text === "Danh mục"){
                setIsVisible(true)
            }
        }} onMouseLeave={() => setIsVisible(false)}>
            <p className={``}>{text}</p>
        </div>

        {isVisible && <CategoriesDiv categories={categories} setIsVisible={setIsVisible} setCategories={setCategories} categoriesOld={categoriesOld}/>}
    </>
}

export default MenuItem