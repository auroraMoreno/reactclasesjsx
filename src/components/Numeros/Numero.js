import React, {Component} from 'react';


class Numero extends Component{

    seleccionarNumero =()=>{
        this.props.sumarNumeros(this.props.numero);
    }

    render(){
        return(
            <li style={{color:"fuchsia"}}>
                {this.props.numero}
                <button onClick={this.seleccionarNumero}>Seleccionar numero</button>
            </li>
        );
    }
}

export default Numero;