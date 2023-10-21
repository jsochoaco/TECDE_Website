import {SET_IDIOMA, SET_DATALIVE} from "./action-types"

const initialState = {
    idioma: "",
    formId: ""
}
export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_IDIOMA: {
            return {
                ...state,
                idioma: action.payload
            }
        }
        case SET_DATALIVE: {
            return {
                ...state,
                formId: action.payload
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer