import React, { Component } from "react";

class Platillos extends Component {
    state = {
        platillos: [
            { nombre: 'Molcajete de mariscos: Camarones, pulpo, jaiba y aguacate.', image: 'https://4.bp.blogspot.com/-uF_enjirFJc/Wmfpo3rtVCI/AAAAAAAAJXU/FUDTEfkyK0wI15xHPvFsJcuo7D7eT7xbwCLcBGAs/s640/seafood-400573_640.jpg' },
            { nombre: 'Molcajete de pollo: Pechuga de pollo, queso, tomate, cebolla y nopales.', image: 'https://antojitosmexicanos.info/imgs/recetas/pollo_molcajete-de-pechuga.png'},
            { nombre: 'Molcajete de cecina y quesos: Cecina, chorizo, queso y cebollitas.', image: 'https://static.wixstatic.com/media/f92352_6f64e6a3c3a44a9081125d25649a127a~mv2.jpg/v1/fill/w_498,h_373,al_c,lg_1,q_85/f92352_6f64e6a3c3a44a9081125d25649a127a~mv2.jpg' },
            { nombre: 'Molcajete de carnes en salsa: Pollo, lomo de res y costillas de cerdo.', image: 'https://www.asaderobajasonora.com/wp-content/uploads/2016/01/molcajete-pollo.jpg' },
        ],
    };

    render() {
                
        return (
            <div id="content" className="platillos">
                <h2 className="subheader">MENU</h2>

                {/*Crear componente platillo*/}

                <div id="articles" className="platillos">

                {
                    this.state.platillos.map((platillo, i) => {
                        return(
                            
                             <article className="article-item" id="article-template">
                                <div className="image-wrap">
                                    <img src={platillo.image} alt={platillo.nombre} height="150" width="300"/>
                                </div>

                                <h2>{platillo.nombre}</h2>
                                
                                <div className="clearfix"></div>
                               
                                </article>
                                

                        )
                    })
                }
                </div>
                


            </div>
        );

    }

}
    
    export default Platillos;
                        
