//si trabajamos con ES6, siempre debemos importar component de react 
import React, {Component} from 'react';
import "./PrimeraClase.css";

//Podemos declarar metodos fuera de la clase 
//con la sintaxis function
//Es lo mismo pero no podemos usar var de la clase
//para llamar a las funciones externas no se utiliza this

function miFuncion(){
    console.log("Estoy en una funcion fuera de la clase");
}

//cualquier clase ES6 hereda de component 
//siempre debe empezar con mayuscula o no funcionará 

class PrimeraClase extends Component{
    //toda clase contiene un metodo render, usado para el dibujo del componete
    //el metodo render será evaluado en todo momento(lo leerá varias veces)
    //ahi tenemos el codigo del return 

    //para crear metodos en la clase no se utiliza ninguna palabra clave
    //lo mismo para variables

    contador = 1;
    metodoAccion = () =>{
        console.log("Contador " + this.contador);
        this.contador++;
    }

    //podemos manejar var de estdao para los dibujos 
    //las variables de estado debemos declararlas para poder utilizarlas
    //la forma de crearlas es asi:
    //state={variable1: valor1, variable2: valor2}
    //Podemos combinar los props que recibimos con state 
    //para visualizar los cambios
    state= {valor: parseInt(this.props.inicio) }
    incrementarEstado = ()=>{
        //contador para dibujar su incremento en la pagina
        //cada vez que entremos aqui, incrmentamos el contador
        this.setState({
            valor: this.state.valor + 1
        });
    }

    //metodos clase inamovible, mantendrán su vaor
    //render se vuelve a ejecutar cada vez que se produce un cambio

    render(){
        //dentro de render podemos declarar también func o var 
        // debemos hacerlo con la sintaxis anterior (const)
        //Hay diferencia entre render y fuera 
        //render se ejecuta cada vez que existan cambios en el dibujo
        var numero=1;
        const hacerAlgo = () =>{
            console.log("Haciendo algo..." + numero);
            numero++;
        }
        return(
            <React.Fragment>
                <h1 className="rojo">{this.props.titulo}</h1>
                <h2 className="azul">
                    Estado: {this.state.valor}
                </h2>
                <button onClick = {this.metodoAccion}>Incrementar</button>
                <button onClick={()=>{
                    miFuncion();
                    hacerAlgo(); //si el metodo o var está en el render, no lleva this
                    this.incrementarEstado();
                }}>Mi funcion</button>
            </React.Fragment>
        );
    }

}

export default PrimeraClase;