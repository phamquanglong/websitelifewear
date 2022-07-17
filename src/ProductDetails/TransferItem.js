var TransferItem = (props) => {
    var { image, url } = props

    return <a href={`${url}`}>
        <div style={{backgroundImage: `url(${image})`}} className="h-24 w-80 mt-5 bg-cover">
    </div>
    </a>
}

export default TransferItem