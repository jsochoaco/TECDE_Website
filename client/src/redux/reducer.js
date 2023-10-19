import {SET_IDIOMA} from "./action-types"

const initialState = {
    idioma: ""
}
export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_IDIOMA: {
            return {
                ...state,
                idioma: action.payload
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer