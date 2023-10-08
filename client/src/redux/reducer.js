import {FILTRO_ORIGEN, FILTRO_TEMP, SET_API_DOGS, SET_DB_DOGS, SET_INTERMEDIA, CLEAR, SET_DB_TEMP, ORDEN_NAME, ORDEN_PESO, CREATE_DOG, SEARCH_DOG, CREADO} from "./action-types"

const initialState = {
    completDogs: [],
    apiDogs: [],
    dbDogs: [],
    filterTemp: [],
    filtroOrigen: null,
    allDogs: [],
    allTemperamentos: [],
    intermedia: [],
    createdDog: null,
    filtered: [],
    search: []
}
export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_API_DOGS:
            return {...state, apiDogs: action.payload, allDogs: [...state.allDogs, ...action.payload], completDogs: [...state.allDogs, ...action.payload] }

        case SET_DB_DOGS: {
            return {...state, dbDogs: action.payload, allDogs: [...state.allDogs, ...action.payload], completDogs: [...state.completDogs, ...action.payload]}}

        case CREATE_DOG: {
            const dogCreated = action.payload.dogs
            const existe = action.payload.existe
            if (existe === true) {
                return {...state, dbDogs: [...state.dbDogs, dogCreated], allDogs: [...state.allDogs, dogCreated], createdDog: existe}}
            }
        case CREADO: {return {...state, createdDog: action.payload}}
        case SET_DB_TEMP: {
            return {
                ...state,
                allTemperamentos: action.payload,};
        }
        case SET_INTERMEDIA : {
            return {...state, intermedia: action.payload}}

        case CLEAR: {
            return {...state, allDogs: [...state.dbDogs,...state.apiDogs], completDogs: [...state.dbDogs,...state.apiDogs]}
        }
        case SEARCH_DOG: {
            if (action.payload && action.payload.length > 0) {
                return { ...state, allDogs: [...action.payload], search: action.payload };
        }}
        case FILTRO_ORIGEN: {
            const orgien = action.payload === "All" ? 
            state.completDogs : state.completDogs.filter((dog) => dog.origen === action.payload)
            return {
                ...state,
                allDogs: orgien,}}
        case FILTRO_TEMP: {
            const payloadact = action.payload
            if (payloadact.length < 1) {
                if(state.search.length < 100 && state.search.length !== 0) {
                    return {
                        ...state,
                        allDogs: state.search}}
                else {
                    state.completDogs = [...state.dbDogs, ...state.apiDogs]
                    return {
                        ...state,
                        allDogs: state.completDogs}}
                }
            else if (payloadact.length >= 1) {
                state.filtered = state.filtroOrigen === "All" ? [...state.dbDogs, ...state.apiDogs] : [...state.allDogs];
                let cumplen = []
                state.filtered.forEach((dog) => {
                    if(dog.origen === "DB") {
                        const filtro = state.intermedia.filter((obj) => obj.dogId === dog.id);
                        const indexTemp = filtro.map((obj) => obj.temperamentId);
                        let db = []
                        for (let i =0; i < indexTemp.length; i++) {
                            const temp = state.allTemperamentos[indexTemp[i]]
                            if(temp) {const tem = temp.temperament
                            db.push(tem)}
                        }
                        if (db !== undefined){
                            const contiene = payloadact.every((el) => db.includes(el))
                            if (contiene) {
                                cumplen.push(dog)}}
                    }
                    if (dog.origen === "API") {
                        const apitemp = dog.temperament
                        if (apitemp != undefined) {
                            const array = apitemp.split(',')
                            const text = array.map((word) => word.trim());
                            const contiene = payloadact.every((elem) => text.includes(elem))
                            if (contiene) cumplen.push(dog)}
                    }})
                if (cumplen.length < 1) {
                    return { ...state, allDogs: [], filterTemp: [] };
                }
                else {
                    return { ...state, allDogs: cumplen, filterTemp: payloadact, filtered: cumplen, completDogs: cumplen};
                }
            }
        }
        case ORDEN_NAME: {
            let ordenar= []
            if (state.filtroOrigen === "All" && state.filterTemp.length === 0){
                ordenar = [...state.allDogs]
            }
            else if (state.filtroOrigen === "All" && state.filterTemp.length > 0){
                ordenar = [...state.allDogs]
            }
            else if (state.filtroOrigen !== "All" && state.filterTemp.length === 0){
                ordenar = [...state.allDogs]
            }
            else if (state.filtroOrigen !== "All" && state.filterTemp.length > 0){
                ordenar = [...state.allDogs]
            }
            if (action.payload === "UN") {
                return {...state, allDogs: [...state.allDogs]}
            }
            else if (action.payload !== "UN") {
                const sortDogs = ordenar.sort((a,b)=> {
                    if (action.payload === "A-Z") {
                        if(a.name < b.name) return -1
                        if (b.name < a.name) return 1
                        return 0
                    }
                    if (action.payload === "Z-A") {
                        if(a.name < b.name) return 1
                        if (b.name < a.name) return -1
                        return 0
                    }
                });
                return {...state, allDogs: sortDogs}
            }
        } 
        case ORDEN_PESO: {
            const ordenar = state.allDogs.map((dog) => {
                if (dog.origen === "API") {
                    const weightMetric = dog.weight?.metric;
                    const minimo = parseInt(weightMetric.split(" ")[0]);
                    const maximo = parseInt(weightMetric.split(" ")[2]);
                    return {
                        ...dog, 
                        min: minimo,
                        max: maximo,
                    };
                }
                if (dog.origen === "DB") {
                    const weightMetric = dog.weight;
                    const minimo = parseInt(weightMetric.split("-")[0]);
                    const maximo = parseInt(weightMetric.split("-")[1]);
                    return {
                        ...dog, 
                        min: minimo,
                        max: maximo,
                    };
                }
            });
            if (action.payload === "UN") {
                return { ...state, allDogs: [...state.allDogs] };
            } else {
                const sortDogs = ordenar.sort((a, b) => {
                    if (action.payload === "MenorAMayor") {
                        return a.min - b.min;
                    } else if (action.payload === "MayorAMenor") {
                        return b.min - a.min;
                    } else {
                        return 0;
                    }
                });
                return { ...state, allDogs: sortDogs };
            }
        }
        default:
            return {
                ...state
            }
    }
}
export default reducer