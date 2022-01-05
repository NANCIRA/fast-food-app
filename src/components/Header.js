import React, { Component } from 'react';
import logo2 from '../assets/images/logo2.jpg';
import { NavLink, Navlink } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                 {/*LOGO*/}
                    <div id="logo">
                        <img src={logo2} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong >Molcajete Bowl</strong>
                        </span>  
                       {/*LIMPIAR FLOTADOS*/}
                       <div className="clearfix"></div>  
                    {/*MENU*/}
                        
                    <nav id="menu">
                            <ul>
                                <li>
                                    <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="platillos" activeClassName="active">Platillos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="formulario" activeclassName="active">Formulario</NavLink>
                                </li>
                                                                
                            </ul>
                        </nav>
                        {/*LIMPIAR FLOTADOS*/}
                        <div className="clearfix"></div>                                                  
                                          
                    </div>
                </div>    
            </header>
            
        );
    }
}

export default Header;