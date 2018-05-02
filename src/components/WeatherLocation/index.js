
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData/index'
import transformWeather from '../../services/weatherTransforms'
//Import Circular Progress
import CircularProgress from 'material-ui/CircularProgress';

import './style.css'

const apiKey = 'd806fceea3a6d70807d4ed519bda2f45'
const url = `http://api.openweathermap.org/data/2.5/weather`
//componente funcional
/*
1) Creamos la clase
2) Definimos el constructor y iniciamos el constructor padre (super)
3) Definimos los metodos
*/
class WatherLocation extends Component{ 
    constructor({city}){
        super()
        this.state = {
            city,
            data: null
    }
}

/* EL CICLO DE VIDA DE REACT
1) ComponentWillMount() -- Se ejecuta una vez
2) ComponentDidMount() -- Cuando se termina de inicializar el componente -- Se ejecuta una vez 
3) ComponentWillMount() -- Cada vez que se actualiza el componente
4) ComponentDidUpdate() -- Cuando se termina de actualizar el componente
*/
componentWillMount(){
const api_weather = `${url}?q=${this.state.city}&appid=${apiKey}&units=metric`
fetch(api_weather).then(data =>{
    let datos = data.json()
    return datos
}).then(weather_data=>{
    const data = transformWeather(weather_data)
    this.setState({data})
})
}
componentDidMount(){
}
componentWillUpdate(){
}
componentDidUpdate(){
}
//RENDERIZARA LA PAGINA
render = () => {
    const {onWeatherLocationClick} = this.props
return (<div className="weatherLocationCont" onClick={onWeatherLocationClick}> 
    <Location city={this.state.city}/>
    {this.state.data ? <WeatherData data={this.state.data} /> : //Si data es igual a null se establece CircularProgres
     <CircularProgress size={60} thickness={6} />}
</div>)
}

}
WatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick : PropTypes.func
}


export default WatherLocation