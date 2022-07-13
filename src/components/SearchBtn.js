import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

var SearchBtn = (props) => {
    return <div className={`text-3xl py-4 px-5 flex items-center rounded-full`}>
        <FontAwesomeIcon icon={faSearch} className={`hover:text-sky-400 cursor-pointer`}/>
    </div>
}

export default SearchBtn