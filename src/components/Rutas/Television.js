import React, {Component} from 'react';
import LogoTele from './../../assets/images/television.jpg';

class Television extends Component{
    render(){
        return(
            <div>
                <h1>Componente Television</h1>
                <img src={LogoTele}/>
            </div>
        );
    }
}


export default Television;