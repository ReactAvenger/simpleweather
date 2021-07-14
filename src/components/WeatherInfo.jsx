import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const WeatherInfo = () => {


    const weather = useSelector(state => state.weather.weather)
    const city = useSelector(state => state.weather.searchValue)
    const loading = useSelector(state => state.weather.loading)
    const error = useSelector(state => state.weather.error)

    return (
        loading ?
            <Loader />
            :
            <div className='weather-block'>
                {
                    city ?
                        (
                            error ?
                                <h2 className='error'>{error}</h2>
                                :
                                (
                                    <>
                                        <h2 className='weather-title'>The weather in {city}:</h2>
                                        <div>
                                            <div className='weather-content'>
                                                <p className='temp'>
                                                    {weather.temp}&#8451;
                                                </p>
                                                <p className='clouds'>
                                                    {weather.clouds}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )
                        ) : (<h2>Type name of city</h2>)
                }


            </div>

    )
}

export default WeatherInfo
