import React, {Component} from 'react';
import Comic from './Comic';
import './Comics.css';

class Comics extends Component{
state={
    comics:[
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña"
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno"
        },
        {
          titulo: "Guardianes de la Galaxia",
          imagen:
            "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
          descripcion: "Yo soy Groot"
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores"
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons"
        },
        {
          titulo: "Batman",
          imagen:
            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
          descripcion: "Murcielago"
        }
  ],
  favorito: null //o hay comic o no hay, un objeto vacio 
}

seleccionarComic = comic =>{
    this.setState({
        favorito:comic
    });
}

render(){
    return(
        <div>
             {/* Condicion && Html */}
             {
                this.state.favorito &&  //si existe fav que lo ponga
                ( <div>
            <h1 style={{color:"blue"}}>{this.state.favorito.titulo}</h1>
            <img src={this.state.favorito.imagen}/>
                </div>)
            }
            {this.state.comics.map((comic,index)=>{
                return(
                    <Comic 
                    comic={comic}
                    key={index}
                    seleccionarComic={this.seleccionarComic}/>
                );
            })
            }
           
        </div>
    );
}
}

export default Comics;