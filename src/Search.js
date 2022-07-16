import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Menu from "./components/Menu/Menu"
import ProductItem from "./components/Products/ProductItem"
import { getSearch } from "./Data"
import ReactLoading from 'react-loading';
import { colors } from "./colors"
import Footer from "./components/Footer"

var Search = (props) => {
    var { state } = useLocation()
    var { value } = state

    var [productsList, setProductsList] = useState([])
    var [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getSearch(value, setProductsList, setIsLoading)
    }, [value])

    return <div>
        <Menu />
        <div className="text-center text-3xl mt-32 mb-20">Kết quả tìm kiếm sản phẩm "{value}"</div>
        {isLoading ? <div className="flex w-full justify-center">
            <ReactLoading type='balls' color='black' height={'5%'} width={'5%'}/>
        </div>
        : <div className="flex flex-wrap justify-evenly mx-40">
            {productsList.data.map(item => <ProductItem item={item} margin={true}/>)}
        </div>}

        <Footer />
    </div>
}

export default Search