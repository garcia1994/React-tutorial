import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation/index'
import './style.css'
/*
1) Envia una lista de weather con ciudades
2) 
*/
const LocationList =({cities, onSelectedLocation})=>{

    const handleWeatherLocationClick = city=>{
        console.log('HandleWeatherLocation')
        onSelectedLocation(city)
    }

    const strToComponent = cities =>(
        cities.map(city =>
            (
                <WeatherLocation
                        key={city} 
                        city={city} 
                        onWeatherLocationClick={()=> handleWeatherLocationClick(city)}/> )))
    //Return
    return(
<div className="LocationList">
    {strToComponent(cities)}
</div>)
}
//VALIDAR PROTOTIPOS
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList