import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {CLOUD, 
    CLOUDY,
    SUN,
    RAIN, 
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE
 } from '../../../constants/weathers'
import './style.css'
let stateToIconName = weatherState=>{ // Funcion arrow funcion y llamado {getWeatherIcon(parametro)}
    switch(weatherState){
        case CLOUD:
            return  'cloud'
        case CLOUDY:
        return 'cloudy'
        case SUN:
        return 'sun'
        case RAIN:
        return 'rain'
        case SNOW:
        return 'snow'
        case WINDY:
        case THUNDER:
        return 'day-thunderstorm'
        case DRIZZLE:
        return 'day-showers'
        default:
        return 'day-sunny'
    }
}
let getWeatherIcon = weatherState => {
    return (<WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />)
}

const WeatherTemperature = ({temperature, weatherState})=>(
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className="temperature">
            {`${temperature}`}
            </span>
            <span className="temperatureType">C</span>

    </div>
)
WeatherTemperature.propTypes = { //Validaciones para los parametros
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}
export default WeatherTemperature