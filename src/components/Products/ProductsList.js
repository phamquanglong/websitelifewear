import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import { getProducts } from "../../Data"
import { colors } from "../../colors"
import { useNavigate } from "react-router-dom"
import ReactLoading from 'react-loading'

var ProductsList = (props) => {
    var { id, text } = props
    var [productsList, setProductsList] = useState([])
    var [isLoading, setIsLoading] = useState(true)

    var navigate = useNavigate()

    useEffect(() => {
        getProducts(setProductsList, setIsLoading, id)
    }, [])

    return <>
        <div className="flex flex-col mt-10 mb-20">
            <div className="flex flex-row items-center mx-52">
                <div className="flex flex-1 border h-fit"></div>
                <div className="text-2xl mx-10 uppercase font-bold">{text === undefined ? productsList.name : text}</div>
                <div className="flex flex-1 border h-fit"></div>
            </div>
            {isLoading === false ? <div className="items-center flex flex-col mt-10">
                <div className="flex mx-52">
                <div className="flex flex-1"></div>
                </div>
                <div className="flex justify-center flex-wrap max-w-screen-2xl">
                    {productsList.products.data.map((item, index) => index < 10 && <ProductItem item={item} margin={true}/>)}
                </div>
                <div className={`cursor-pointer my-5 w-fit bg-${colors.primary} px-5 py-3 text-white`}
                    onClick={() => navigate(`/Categories`, {state: {name: productsList.name, id: id}})}>Xem thêm</div>
            </div>
            : <div className="flex flex-1 justify-center mt-20">
                <ReactLoading type='balls' color='black' height={'5%'} width={'5%'}/>
            </div>}
        </div>
    </>
}

export default ProductsList