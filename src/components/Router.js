import React, { Component } from 'react'
//Para router necesitamos agregar unos componentes de la libreria
//Router-dom 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//todos los componentes entre los que deseemos navegar estarán aqui
import Home from './Rutas/Home';
import Cine from './Rutas/Cine';
import Musica from './Rutas/Musica';
import Television from './Rutas/Television';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/musica" component={Musica}/>
                        <Route path="/television" component={Television}/>
                        <Route path="/cine" component={Cine}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
