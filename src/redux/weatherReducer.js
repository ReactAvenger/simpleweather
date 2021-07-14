import { SET_ERROR, SET_LOADING, SET_WEATHER, UPDATE_SEARCH_VALUE } from './types'

const initialState = {
    searchValue: '',
    weather: {
        temp: '',
        clouds: ''
    },
    loading: false,
    error: ''
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return { ...state, searchValue: action.payload }
        case SET_WEATHER:
            return { ...state, weather: action.payload }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}