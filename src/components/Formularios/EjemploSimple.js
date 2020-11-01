import React, { Component } from 'react'

export default class EjemploSimple extends Component {

    //propiedades para enlazar las cajas <input>
    nombre = React.createRef();
    apellidos = React.createRef();

    //Para dibujar necesitamos un state 
    //Alamacenar un usuario en state 
    state = {
        usuario: {}
    }

    //Metodo para capturar los datos 
    recibirDatos = (e) =>{
        //en react debemos cortar el submit para trabajar en front
        e.preventDefault();
        //console.log("Nombre... " + this.nombre.current.value);
        //console.log("Apellidos " + this.apellidos.current.value);
        var usuario = {
            nombre: this.nombre.current.value,
            apellidos: this.apellidos.current.value
        }
        this.setState({
            usuario: usuario
        });
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Forms React</h1>
                {this.state.usuario.nombre && 
                (
                        <h1>
                            {this.state.usuario.nombre}, {this.state.usuario.apellidos}
                        </h1>
                    )
                }
                <form onSubmit={this.recibirDatos}>
                    <label htmlFor="nombre">Nombre: </label>
                    <input 
                    type="text" 
                    ref={this.nombre}
                    name="nombre"
                    onChange={this.recibirDatos}/>
                    <br/>
                    <label htmlFor="apellidos">Apellidos</label>
                    <input 
                    type="text"
                    ref={this.apellidos}
                    name="apellidos"
                    />
                    <br/>
                    <button>Enviar datos</button>
                </form>
            </div>
        )
    }
}
