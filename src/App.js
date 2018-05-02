import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
//Para poder utilizar Material UI CSS
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended'

import './App.css';
const cities =[
    'Buenos Aires',
    'Costa Rica',
    'Colombia'
]
class App extends Component {

    constructor(){
        super()
        this.state= {city: null}
    }
    // This.setState = Renderiza nuevamente el Component 1 y Component 2
    handleSelectedLocation = city =>{
        this.setState({city:city}) //Busca una propiedad llamada city y la edita con el nuevo valor
        console.log(`handleSelectionLocation ${city}`)
    }

    render() {
        const {city} = this.state
        // 1) Component 1 Location List = Se Renderiza
        // 2) Component 2 ForeCasExtended = Se Renderiza
        return ( 
            <MuiThemeProvider>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <AppBar title="Weather App" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <LocationList cities={cities}
                        onSelectedLocation = {this.handleSelectedLocation}></LocationList>
                    </Col>

                    <Col xs={12} md={6}>
                        <Paper zDepth={4}>
                        <div className="detail">
                        {
                            city ? 
                        <ForecastExtended city={city}></ForecastExtended>:
                        null}
                            
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;