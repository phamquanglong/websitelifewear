import { Rating } from "@mui/material"
import { useEffect, useState } from "react"
import { colors } from "../colors"
import { getReviews } from "../Data"
import ReviewItem from "./ReviewItem"
import ReactLoading from 'react-loading'

var Reviews = (props) => {
    var [reviews, setReviews] = useState([])
    var [isLoading, setIsLoading] = useState(true)
    var { id, details } = props

    useEffect(() => {
        getReviews(id, setReviews, setIsLoading)
    }, [])

    return <div>
        <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">Đánh giá sản phẩm</p>
            <div className="flex">
                <div className="flex"><p className={`text-${colors.primary} font-bold`}>{details.rating_avg}/5</p> ({details.reviews_count} đánh giá)</div>
                <Rating
                    name="Đánh giá sản phẩm"
                    value={details.rating_avg}
                    readOnly
                />
            </div>
        </div>
        {isLoading ? <div className="flex flex-1 justify-center items-center h-screen">
                <ReactLoading type='balls' color='black' height={'5%'} width={'5%'}/>
            </div>  : reviews.map(item => <ReviewItem item={item}/>)}
    </div>
}

export default Reviews