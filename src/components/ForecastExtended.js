import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem/'
import transformForecast from './../services/transformForcast'
import './style.css'
//VARS
const apiKey = 'd806fceea3a6d70807d4ed519bda2f45'
const url = `http://api.openweathermap.org/data/2.5/forecast`

/*let days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]
const data = {
    temperature:10,
    humidity:10,
    weatherState: 'normal',
    wind:'normal'
}
*/

class ForecastExtended extends Component{

    constructor (){
        super()
        this.state = {forecastData:null}
    }
    componentDidMount(){
        //fetch or axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${apiKey}`
        fetch(url_forecast).then(data => {
            return data.json()
        }).then(datos =>{
            const forecastData = transformForecast(datos)
            
            this.setState({forecastData})
            console.log(forecastData)
        })
    }
    renderForecastItemDays(forecastData){
        
    
    return (forecastData.map(forecast => (
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} 
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}>
        
        </ForecastItem>)))
   
    
    }
     renderProgress= ()=>{
         return 'Cargando Pronostico extendida...'
     }
    render(){
        const {city} = this.props
       //tomar la propiedad city de App let {city} = this.props 
       const {forecastData} = this.state
        return (
        <div>
           <h2 className="forecast-title"> Pronostico Extendido para {city}</h2>
           {
               forecastData ?
               this.renderForecastItemDays(forecastData) :
               this.renderProgress()
               
            }
            </div>)
        
    }
}

// Validar la variable
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}
export default ForecastExtended