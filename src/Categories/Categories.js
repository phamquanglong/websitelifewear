import { useLocation } from "react-router-dom"
import Menu from "../components/Menu/Menu"
import ProductItem from "../components/Products/ProductItem"
import Footer from '../components/Footer'
import FilterItem from "./FilterItem"
import { useState } from "react"

var Categories = (props) => {
    var { state } = useLocation()
    var { productsList, name, id } = state

    var [size, setSize] = useState("")
    var [rangePrice, setRangePrice] = useState([])

    var [sizes, setSizes] = useState([
        {
            name: 'XS',
        },
        {
            name: 'S',
        },
        {
            name: 'M',
        },
        {
            name: 'L',
        },
        {
            name: 'XL',
        },
        {
            name: '2XL',
        },
        {
            name: '3XL',
        },
        {
            name: '4XL',
        },
    ])

    console.log({productsList, name})
    return <div>
        <Menu />
        <div className="text-3xl text-center my-10">Danh mục thời trang {name}</div>
        <div className="flex flex-row mx-40">
            <div className="flex flex-1 w-full ml-20 flex-col">
                <FilterItem data={sizes} name="Kích cỡ" setValue={setSize} setData={setSizes}/>
                <FilterItem name="Khoảng giá" setValue={setRangePrice} rangePrice={rangePrice}/>
            </div>
            <div className="flex flex-row flex-wrap justify-evenly max-w-6xl">
                {productsList.map(item => <ProductItem item={item} margin={true}/>)}
            </div>
        </div>

        <Footer />
    </div>
}

export default Categories