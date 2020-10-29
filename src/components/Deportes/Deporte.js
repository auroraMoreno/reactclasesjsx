
import React, {Component} from 'react';

class Deporte extends Component {
    //state = {seleccionado: ""}
    seleccionarDeporte = () =>{
    //console.log(this.props.deporte);
    //cuando el user pulse click cambiamos el valor del state
    //cuando pulsemos en el boton llamaremos al metodo del padre 
    //que nos ha enviado en props
    //this.setState({
        //seleccionado: this.props.deporte 
    //});
    this.props.seleccionarFavorito(this.props.deporte);

    }
    render(){
        return(<React.Fragment>
            <li style={{color:"blue"}}>
                {this.props.deporte}
                <button onClick={this.seleccionarDeporte}>Seleccionar deporte</button>
                {/*<span style={{color:"red"}}>
                    {this.state.seleccionado}
                </span>*/}
            </li>
            </React.Fragment>
        );
    }
}

export default Deporte;
