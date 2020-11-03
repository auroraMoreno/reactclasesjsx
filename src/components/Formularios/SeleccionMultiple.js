import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    seleccionMultipleRef = React.createRef();
    state = {
        ingredientes : [
            "Leche","Huevos","Cacao","Avellanas", "Azucar","Unicornio"
        ],
        seleccionados:""
    }

    generarOptions = ()=>{
        var options = [];
        this.state.ingredientes.map((ingrediente,i)=>{
            options.push(
                <option key={i} value={ingrediente}>
                    {ingrediente}
                </option>
            );
        });
    return options; 
    }

    mostrarSeleccionado = (e)=>{
        e.preventDefault();
        var datos = "";
        //esatmos usando ref.current.value cuando son selecciones simples 
        //en este ejemplo nos devuelve un array para acceder a los options 
        //ref.current.options 
        //en dicho array recorremos y preguntamos por los seleccionados 
        var options = this.seleccionMultipleRef.current.options;
        //recorremos todos los options: 
        for (var i = 0; i < options.length; i++){
            //preguntamos por el seleccionado
            if(options[i].selected == true){
                datos += options[i].value + ",";
            }  
        }
        this.setState({
            seleccionados: datos
        });
       
    }

    render() {
        return (
            <div>
                <h1>Seleccion múltiple</h1>
                <form onSubmit={this.mostrarSeleccionado}>
                    <select
                    name="selectMultiple" 
                    size="10"
                    ref={this.seleccionMultipleRef}>
                        {this.generarOptions()}
                    </select>
                    <button>Mostrar seleccionados</button>
                </form>
                <h1 style={{color:"red"}}>
                    {this.state.seleccionados}
                </h1>
            </div>
        )
    }
}
