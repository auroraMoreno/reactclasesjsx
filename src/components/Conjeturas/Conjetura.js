import React, { Component } from 'react';


export default class Conjetura extends Component {

    seleccionarNumero = ()=>{
        this.props.comprobarNumero(this.props.numero);
    }

    render() {
        return (
            <div>
                <li>
                    {this.props.numero}
                    <button onClick={this.seleccionarNumero}>Comprobar</button>
                </li>
            </div>
        )
    }
}
