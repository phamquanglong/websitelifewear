import { SET_INFO } from './constants'

const initialState = {
    info: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO:
            return {
                ...state,
                info: action.payload
            }
        default:
            return state
    }
}

export default rootReducer