import {SET_IDIOMA, SET_DATALIVE, ACTUAL_BLOG_EN, ACTUAL_BLOG_ES} from "./action-types"

const initialState = {
    idioma: "",
    formId: "",
    spanishBlogs: [],
    englishBlogs: []
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
        case ACTUAL_BLOG_EN: {
            return {
                ...state,
                englishBlogs: action.payload
            }
        }
        case ACTUAL_BLOG_ES: {
            return {
                ...state,
                spanishBlogs: action.payload
            }
        }
        default:
            return {
                ...state,
            }
    }
}




export default reducer