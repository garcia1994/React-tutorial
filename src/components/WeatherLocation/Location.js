import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Location = ({city})=>{ //destructuring
    //const city = props.city 
   // const {city} = props //{city} = props.city porque la terminacion son iguales Destructurin
    //debugger Como hacer un point
    return (
    <div className="LocationCont">
        <h1 >{city}</h1>
    </div>
)
}
Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location