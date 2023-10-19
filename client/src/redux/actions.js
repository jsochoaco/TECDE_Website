import { SET_IDIOMA } from "./action-types";


export const setIdioma = (idiomaNav) => {
    return function (dispatch) {
        dispatch ({
            type: 'SET_IDIOMA',
            payload: idiomaNav,
        })
    }
  };