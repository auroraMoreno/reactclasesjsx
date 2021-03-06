import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import PrimeraClase from './components/PrimeraClase/PrimeracClase';
import Deportes from './components/Deportes/Deportes';
import Numeros from './components/Numeros/Numeros'
import Comics from './components/Comics/Comics';
import EjemploSimple from './components/Formularios/EjemploSimple';
import Conjeturas from './components/Conjeturas/Conjeturas';
import SeleccionSimple from './components/Formularios/SeleccionSimple';
import SeleccionMultiple from './components/Formularios/SeleccionMultiple';
import ComicMultiple from './components/Formularios/ComicMultiple';
import SeleccionComponent from './components/Formularios/SeleccionComponent';

ReactDOM.render(
  <React.StrictMode>
    {/*<PrimeraClase titulo="Componente 1" inicio="16"/>
    <PrimeraClase titulo="Componente 2" inicio="99"/>
<Deportes/>
<Numeros/>
 <Comics/>
  <App/> 
   <EjemploSimple/>
    <Conjeturas/>
    <SeleccionSimple/>
      <SeleccionMultiple/>
        <ComicMultiple/>
         <SeleccionSimple/>
*/}
  <SeleccionComponent/>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
