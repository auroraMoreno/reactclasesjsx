import React, {Component} from 'react';
import LogoMusica from './../../assets/images/musica.jpg';

class Musica extends Component{
    render(){
        return(
            <div>
                <h1>Componente Musica</h1>
                <img src={LogoMusica}/>
            </div>
        );
    }
}


export default Musica;