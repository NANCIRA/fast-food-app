import React, { Component } from "react";


class Slider extends Component {

    render() {
        console.log(this.props);
        return (
            <div id="slider" class="slider-big"> 
                <h1>{this.props.title}</h1>
                {this.props.btn &&
                    <a href="#" className="btn-white">{this.props.btn}</a>
                }                  
               {/* <h1> Simplemente, una delicia a tu alcance...</h1>
                <p> 
                    Ubicado en el centro histórico de Xalapa a una cuadra de la Catedral y del Palacio de Gobierno. 
               </p>*/}
                
                               
            </div>
        );
    }
}

export default Slider;