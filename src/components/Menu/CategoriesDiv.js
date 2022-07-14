

var CategoriesDiv = (props) => {
    var { categories, setIsVisible } = props

    console.log(categories)

    return <div className="absolute top-16 shadow-md bg-white min-w-50" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {categories.map(i => <div className="p-5 text-black"s>{i.name}</div>)}
            <div className="border-2"></div>
        </div>
}

export default CategoriesDiv