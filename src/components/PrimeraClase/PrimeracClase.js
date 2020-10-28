//si trabajamos con ES6, siempre debemos importar component de react 
import React, {Component} from 'react';
import "./PrimeraClase.css";

//cualquier clase ES6 hereda de component 
//siempre debe empezar con mayuscula o no funcionará 

class PrimeraClase extends Component{
    //toda clase contiene un metodo render, usado para el dibujo del componete
    //el metodo render será evaluado en todo momento(lo leerá varias veces)
    //ahi tenemos el codigo del return 

    render(){
        return(
            <React.Fragment>
                <h1 className="rojo">Primer componente class</h1>
            </React.Fragment>
        );
    }

}

export default PrimeraClase;