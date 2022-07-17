import { useLocation } from "react-router-dom"
import Menu from "../components/Menu/Menu"
import ProductItem from "../components/Products/ProductItem"
import Footer from '../components/Footer'
import FilterItem from "./FilterItem"
import { useEffect, useState } from "react"
import { filter, getProducts } from "../Data"
import { colors } from "../colors"
import ReactLoading from 'react-loading';

var Categories = (props) => {
    var { state } = useLocation()
    var { name, id } = state

    var [dataList, setDataList] = useState([])
    var [size, setSize] = useState("")
    var [rangePrice, setRangePrice] = useState([])
    var [color, setColor] = useState("")
    var [order, setOrder] = useState("")
    var [isLoading, setIsLoading] = useState(true)

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

    var [colorsData, setColorsData] = useState([
        {
            name: 'Đỏ',
            color: 'red-400'
        },
        {
            name: 'Trắng',
            color: 'gray-100'
        },
        {
            name: 'Đen',
            color: 'black',
        },
        {
            name: 'Vàng',
            color: 'amber-400'
        },
        {
            name: 'Xanh lam',
            color: 'sky-400'
        },
        {
            name: 'Xanh lá',
            color: 'lime-400'
        },
    ])

    var [orders, setOrders] = useState([
        {
            text: 'Giảm dần',
            name: 'desc'
        },
        {
            text: 'Tăng dần',
            name: 'asc'
        }
    ])

    useEffect(() => {
        getProducts(setDataList, setIsLoading, id)
        window.scrollTo(0, 0)
    }, [id])

    return <div>
        <Menu />
        <div className="text-3xl text-center mt-32 mb-20">Danh mục thời trang {name}</div>
        <div className="flex flex-row mx-40">
            <div className="flex flex-1 w-full ml-20 flex-col max-w-xs mb-10">
                <FilterItem data={sizes} name="Kích cỡ" setValue={setSize} setData={setSizes}/>
                <FilterItem data={colorsData} name="Màu sắc" setValue={setColor} setData={setColorsData}/>
                <FilterItem name="Khoảng giá" setValue={setRangePrice} rangePrice={rangePrice}/>
                <FilterItem data={orders} name="Sắp xếp sản phẩm theo giá" setValue={setOrder} setData={setOrders}/>
                <button className={`border-2 text-${colors.primary} border-${colors.primary} p-3 rounded-md hover:bg-${colors.primary} hover:text-white`}
                onClick={() => {
                    filter(size, color, rangePrice, order, setDataList, id)
                }}>Lọc sản phẩm</button>
            </div>
            {isLoading === false ? (dataList.length !== 0 ? <div className="flex flex-row flex-wrap justify-evenly max-w-6xl mx-10">
                {dataList.products.data.map(item => <ProductItem item={item} margin={true}/>)}
            </div> : <div className="flex flex-1 mt-32 justify-center">Không có sản phẩm nào</div>)
            : <div className="flex flex-1 justify-center">
                <ReactLoading type='balls' color='black' height={'5%'} width={'5%'}/>
            </div>}
        </div>

        <Footer />
    </div>
}

export default Categories