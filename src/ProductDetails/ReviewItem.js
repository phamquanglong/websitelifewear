import { Rating } from "@mui/material"
import { colors } from "../colors"

var ReviewItem = (props) => {
    var { item } = props

    return <div className={`p-5 ${colors.bg} rounded-md my-2 w-full`}>
        <div className="flex items-center">
            <div style={{backgroundImage: `url(${item.author.avatar})`}}
            className="h-16 w-16 bg-cover border border-black rounded-full"></div>
            <div className="ml-5">
                <p className="text-xl font-bold">{item.author.full_name}</p>
                <Rating
                    name="Đánh giá"
                    value={item.rating}
                    readOnly
                />
            </div>
        </div>
        <div>{item.comment}</div>
    </div>
}

export default ReviewItem