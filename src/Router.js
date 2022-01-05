import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importar componentes
import Platillos from './components/Platillos';
import Error from './components/Error';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';



class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                
                    {/*CONFIGURAR RUTAS Y PAGINAS*/}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/platillos" component={Platillos} />
                        <Route exact path="/formulario" component={Formulario} />
                  

                        <Route component={Error} />

                    </Switch>

                 
                    <div className="clearfix"></div>

                    <Footer />

            </BrowserRouter>
        );
    }
}

export default Router;

