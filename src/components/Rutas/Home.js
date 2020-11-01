import React, {Component} from 'react';
import LogoHome from './../../assets/images/superthumb.jpg';

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Componente Home</h1>
                <img src={LogoHome}/>
            </div>
        );
    }
}


export default Home;