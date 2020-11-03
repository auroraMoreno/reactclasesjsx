import React, { Component } from 'react';
import Select from 'react-select'; 

export default class SeleccionComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            ingredientes:[
                "Leche","Cacao","Vainilla","Avellanas","Sal","Azucar","Tomate"
            ],
            opciones: [],
            selectedOption: null,
            seleccionados: ""
        }
    }
    
    componentWillMount = () =>{
        this.generarOptions();
    }

    generarOptions =()=>{
        var datos = [];
        this.state.ingredientes.map((ingrediente,i)=>{
            datos.push(
                {value: ingrediente, label: ingrediente}
            );
        });
        this.setState({opciones: datos});
    }

    mostrarSeleccionado = seleccionado =>{
            this.setState({
                selectedOption: seleccionado,
                seleccionados: seleccionado.value
            });

    }
    render() {
        return (
            <div>
                <h1>Select como componente externo</h1>
                <Select 
                value={this.state.selectedOption}
                onChange={this.mostrarSeleccionado}
                options={this.state.opciones} />
                <h2>{this.state.seleccionados}</h2>
            </div>
        )
    }
}
