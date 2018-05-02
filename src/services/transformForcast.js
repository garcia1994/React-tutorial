import moment from 'moment'
import 'moment/locale/es'
import transformWeather from './weatherTransforms'

const transformForecast =(weather_data) =>{

   return ( weather_data.list.filter(item => (
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18 
    )).map(item=>(
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
        
    ))
)
    /*let {humidity,temp} = weather_data.main
    let {weather} = weather_data
    let {speed}= weather_data.wind
    let weatherState = getWeatherState(weather)
    */
    

}
export default transformForecast