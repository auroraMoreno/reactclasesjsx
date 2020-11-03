import { findAllByRole } from '@testing-library/react';
import React, { Component } from 'react'

export default class SeleccionSimple extends Component {

    seleccionado = React.createRef();
    state={
        filas: [],
        opciones: []
    }

    //podemos hacer un metodo para cargar las opt solo una vez

    componentWillMount = ()=>{
        this.generarOptions();
    }

    generarOptions=()=>{
        var options = [];
        for (var i = 1; i <=10; i++) {
            var aleatorio = Math.round((Math.random() * 55) + 1);
            options.push(
                <option key={i} value={aleatorio}>
                    {aleatorio}
                </option>
            );
        }
        this.setState({opciones: options});
        //return options; 
        //asi dibuja todos los elementos que vayamos poniendo cuando carguemos
        //para que se genere nada más arrancar poner parentesis 
    }


    tablaMultiplicar=(e)=>{
        e.preventDefault();
        var numero = parseInt(this.seleccionado.current.value);
        var datos = [];
        for(var i=1; i <=10; i++){
            var operacion = numero * i;
            datos.push(<tr key={i}>
                <td>{numero + " * " + i}</td>
                <td>{operacion}</td>
            </tr>);
        }
        this.setState({
            filas: datos
        });
    }

    render() {
        return (
            <div>
                <h1>Seleccion de elementos</h1>
                <form onSubmit={this.tablaMultiplicar}>
                    <select name="selectNumeros" ref={this.seleccionado}>
                  {this.state.opciones}
                    </select>
                    <button>Generar tabla</button>
                </form>
                <table>
                    <thead>
                        <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.filas}</tbody>
                </table>
            </div>
        )
    }
}
