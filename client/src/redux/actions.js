import { SET_IDIOMA, SET_DATALIVE, ACTUAL_BLOG_ES, ACTUAL_BLOG_EN } from "./action-types";


export const setIdioma = (idiomaNav) => {
    return function (dispatch) {
        dispatch ({
            type: SET_IDIOMA,
            payload: idiomaNav,
        })
    }
  };
  
export const setDatLiveBoton = (idioma) => {
    return function (dispatch) {
        if (idioma === "es")
        dispatch ({
            type: SET_DATALIVE,
            payload: "01HCJN3BRHRYAX0X5ZF9W7VYPA",
        })
        else {
            dispatch ({
                type: SET_DATALIVE,
                payload: "01HD7VY1CTP5V4MYEP465TDC6N",
            })
        }
    }
  };

export const setBlogSp = (articulos) => {
    return function (dispatch) {
        dispatch({
            type: ACTUAL_BLOG_ES,
            payload: articulos
        })
    }
}
export const setBlogEn = (articulos) => {
    return function (dispatch) {
        dispatch({
            type: ACTUAL_BLOG_EN,
            payload: articulos
        })
    }
}