import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';


class Formulario extends Component {

    nombreRef= React.createRef();
    comentariosRef=React.createRef();
    telefonoRef=React.createRef();
    correoRef=React.createRef();
    fechaRef=React.createRef();

    state = {
        user: {}
    };
     
    
    recibirFormulario = (e) => {
        e.preventDefault();
        alert("Formulario enviado!!");

        let user = {
            nombre: this.nombreRef.current.value,
            comentarios: this.comentariosRef.current.value,
            telefono: this.telefonoRef.current.value,
            correo: this.correoRef.current.value,
            fecha: this.fechaRef.current.value,
        }
        
        
        
        console.log("Formulario enviado !!");
        console.log(user);

    }

    render() {

       
        

        return (
            <div id="formulario">

                <div className="center">

                    <div id="content">

                        <h1 className="subheader">Reservaciones</h1>
                        
                                                                          
                        
                        Crear Formulario de Reservaciones

                            <form className="mid-Form" onSubmit={this.recibirFormulario} onChange={this.recibirformulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Comentarios</label>
                                <input type="text" name="comentarios" ref={this.comentariosRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono">Telefono</label>
                                <input type="number" name="telefono" ref={this.telefonoRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo">Email</label>
                                <input type="email" name="correo" ref={this.correoRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fecha">Fecha</label>
                                <input type="date" name="fecha" ref={this.fechaRef} />
                            </div>
                            
                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>

                        

                        </div>

                        <Sidebar />

                        <div className="clearfix"></div>
                    </div>   

                </div>

            



        );
    }
}

export default Formulario;