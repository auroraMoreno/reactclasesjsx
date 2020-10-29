import React, {Component} from 'react';
import Numero from "./Numero";

class Numeros extends Component{
    state={
        numeros:[4,9,22,14,37],
        seleccionado:0,
    }


    sumarNumeros = numeroASumar =>{
        this.setState({
           seleccionado: numeroASumar + this.state.seleccionado
        })
    }

 
    añadirNumero = ()=>{
        var nuevoNum = Math.floor(Math.random() * 10);
        var numeros = this.state.numeros;
        numeros.push(nuevoNum);
        this.setState({
            numeros:numeros
        });
    }

    render(){
        return(
            <div>
                <h2>Deportes</h2>
                <h2>{this.state.seleccionado}</h2>
                <ul>
                    {
                        this.state.numeros.map((n,index)=>{
                            return(
                                <Numero 
                                    key={index}
                                    numero={n}
                                    sumarNumeros={this.sumarNumeros}
                                />
                            );
                        })
                    }
                </ul>
                <button onClick={this.añadirNumero}>Añadir numero</button>
            </div>
        );
    }
}

export default Numeros;
