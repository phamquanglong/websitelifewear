import { useNavigate } from "react-router-dom"

var MenuItem = (props) => {
    var { text, url } = props
    var setText = text === 'Lifewear' ? '3xl font-bold' : 'xl'
    var navigate = useNavigate()

    return <div className={`p-5 text-${setText} items-center flex`} onClick={() => navigate(`/${url}`)}>
        <p className={`hover:text-sky-400 cursor-pointer`}>{text}</p>
    </div>
}

export default MenuItem