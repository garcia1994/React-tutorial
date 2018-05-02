import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from './../WeatherLocation/WeatherData'

const ForecastItem = ({weekDay, hour, data}) =>{
    return(
        <center>
        <div>
        <h3>{weekDay} Hora: {hour} hs</h3>
        <WeatherData data={data}></WeatherData>
        </div>
        </center>
        
    )
    
}

ForecastItem.prototypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired
}

export default ForecastItem