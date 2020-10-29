
import React, {Component} from 'react';
import Deporte from './Deporte';

class Deportes extends Component{
    //este metodo lo ejecutará el hijo llamando al parent
    //le mandará su deporte
    state={
        deportes: ["Padel","Curling","Petanca","Rana","Futbol"],
        nombre:"Alumno React",
        seleccionado:""
    }
    seleccionarFavorito = deporteFavorito =>{
        console.log("Favorito " + deporteFavorito);
        this.setState({
            seleccionado: deporteFavorito
        })
    }

    //tendremos un estado con un array de deportes

    contador =1;
   nuevoDeporte =()=>{
        //cambiar state de los deportes
        //Primero: recuperar los deportes del state
        var deportes = this.state.deportes;
        deportes.push("Deporte " + this.contador);
        this.contador += 1;

        this.setState({
            deportes: deportes
        })
   }

    render(){
        return(
            <div>
                <h1 style={{color:"fuchsia"}}>
                    {this.state.seleccionado}
                </h1>
                <button onClick={this.nuevoDeporte}>Crear un nuevo deporte</button>
                <h2>Deportes de {this.state.nombre}</h2>
                <ul>
                    {
                        this.state.deportes.map((depor,index)=>{
                         return (<Deporte 
                            key={index} 
                            deporte={depor} 
                            seleccionarFavorito={this.seleccionarFavorito} />);

                        })
                    }
                </ul>
            </div>

        );
    }

}

export default Deportes;