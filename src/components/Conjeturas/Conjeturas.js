import React, { Component } from 'react';
import Conjetura from './Conjetura';

export default class Conjeturas extends Component {

    state={
        numeros:[6, 3, 10, 5, 16, 8, 4, 2, 1],
        seleccionado:0,
        correcto: "",
    }

    comprobarNumero=(numeroAComprobar)=>{
        console.log("Comprobando el numero " + numeroAComprobar);
        this.setState({
            seleccionado: numeroAComprobar
        });
        while(numeroAComprobar !=1){
            if(numeroAComprobar % 2 == 0){
                numeroAComprobar = numeroAComprobar / 2;
            }else{
                numeroAComprobar = numeroAComprobar * 3 + 1; 
            }
        this.setState({
            correcto: "Cumple con la conjetura"
        });
        console.log("Numero: " + numeroAComprobar);
        }
    }

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <div>
                <h2>El numero: {this.state.seleccionado}</h2>
                <h2>{this.state.correcto}</h2>
                </div>
               
                <ul>
                    {
                        this.state.numeros.map((n,index)=>{
                            return(
                                <Conjetura
                                    key={index}
                                    numero={n}
                                    comprobarNumero={this.comprobarNumero}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}
