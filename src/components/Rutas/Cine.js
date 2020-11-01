import React, {Component} from 'react';
import LogoCine from './../../assets/images/cine.jpg';

class Cine extends Component{
    render(){
        return(
            <div>
                <h1>Componente Cine</h1>
                <img src={LogoCine}/>
            </div>
        );
    }
}


export default Cine;