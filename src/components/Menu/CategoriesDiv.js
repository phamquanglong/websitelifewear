import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../../colors"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

var CategoriesDiv = (props) => {
    var { categories, setIsVisible, setCategories, categoriesOld } = props

    var navigate = useNavigate()

    return <>
        <div className={`absolute top-16 left-32 w-screen`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            <div className="rounded-md bg-white shadow-md w-fit">
                {categories.map(i => 
                <div className="flex flex-row"
                onMouseEnter={() => {
                    console.log({'arr': categoriesOld})
                    var cloneCategories = categoriesOld.map(item => {
                        if (item.name === i.name) {
                            return {
                                ...item,
                                childrenVisible: 
                                item.childrenVisible === false || item.childrenVisible === undefined
                                ? true : false
                            }
                        }
                        return item
                    })

                    setCategories(cloneCategories)
                    console.log(cloneCategories)
                }} onMouseLeave={() => {
                    // setChildrenVisible(false)
                    var cloneCategories = categoriesOld.map(item => {
                        if (item.name === i.name) {
                            return {
                                ...item,
                                childrenVisible: false
                            }
                        }
                        return item
                    })

                    setCategories(cloneCategories)
                }}>
                    <div onClick={() => navigate('/Categories', {state: {name: i.name, id: i.id}})}
                    className={`flex items-center hover:bg-${colors.primary} w-80 cursor-pointer hover:rounded-md p-5 hover:text-white justify-between`}>
                        <p>{i.name}</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                    
                    {i.childrenVisible === true && <div className={`z-10 bg-white shadow-md rounded-xl absolute left-80 max-w-xl ${i.children.length > 5 ? 'flex flex-wrap' : ''}`}>
                        {i.children.map(item => <div onClick={() => {
                            console.log(item)
                            navigate('/Categories', {state: {name: item.name, id: item.id}})
                        }}>
                            <p className={`hover:text-white p-5 hover:rounded-md hover:bg-${colors.primary} cursor-pointer`}>{item.name}</p>
                        </div>)}
                    </div>}
                </div>)}
            </div>
        </div>
    </>
}

export default CategoriesDiv