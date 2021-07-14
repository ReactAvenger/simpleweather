import { SET_ERROR, SET_LOADING, SET_WEATHER, UPDATE_SEARCH_VALUE } from "./types";

export const updateSearchValue = (value) => {
    return async dispatch => {
        try {
            dispatch({ type: UPDATE_SEARCH_VALUE, payload: value })
            dispatch({type: SET_LOADING, payload: true})
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=e403a5a5f562cc6e20d38fb329ee4738`
                const response = await fetch(url)
            dispatch({type: SET_LOADING, payload: false})
            if (response.ok) {
                const data = await response.json()
            dispatch({type: SET_ERROR, payload: null})
            return dispatch({
                    type: SET_WEATHER, payload: {
                        temp: Math.ceil(data.main.temp - 273),
                        clouds: data.weather[0].main
                    }
                })
            }
            
            dispatch({type: SET_ERROR, payload: 'Invalid name of city'})
            return dispatch({
                type: SET_WEATHER, payload: {
                    temp: null,
                    clouds: null
                }
            })
        } catch (error) {

        }
    }



}