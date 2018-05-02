
import {
    CLOUDY,
    SUN,
    RAIN, 
    SNOW,
    THUNDER,
    DRIZZLE
 } from '../constants/weathers'
 //LOGICA DE ICONO DE TIEMPO
let getWeatherState= weather =>{
    const {id} = weather[0]
    if(id<300){
        return THUNDER
    }else if(id<400){
        return DRIZZLE
    }else if(id < 600){
        return RAIN
    }else if(id<700){
        return SNOW
    }else if(id === 800){
        return SUN
    }else{
        return CLOUDY
    }
}
let weatherTransforms = (weather_data)=>{
    const {humidity, temp} = weather_data.main
    const {weather} = weather_data
    const {speed}= weather_data.wind
    const weatherState = getWeatherState(weather)

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`
    }
    return data
}
export default weatherTransforms