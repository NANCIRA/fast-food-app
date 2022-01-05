import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';
import logo from '../assets/images/logo.jpg';

class Home extends Component {

    render() {

        return (
            <div id="home">

                
                <Slider
                    title="Simplemente, una delicia a tu alcance"
                    size="big"
                    btn="Ir al blog"
                />
                
                <div className="center">
                    <img src={logo} className="App-logo" alt="logo.jpg" height="400" width="600" />
                    <div id="content">
                         <h2>Una rica comida mexicana con sazón Jarocho</h2>
                         <p>Ubicado en el centro històrico de Xalapa, a una cuadra de Catedral y Palacio de Gobierno</p>
                           
                    </div>

                    <Sidebar />

                    <div className="clearfix"></div>



                </div>

            </div>



        );
    }
}

export default Home;