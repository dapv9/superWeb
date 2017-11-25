import React, {Component} from 'react';
import MostrarDomicilios from './MostrarDomicilios.js';
import ListaDomicilios from './ListaDomicilios.js';

export default class Domicilios extends Component {

  render() {
    let domicilios = [];
    for (let domicilio in ListaDomicilios) {
      domicilios.push(<MostrarDomicilios domicilio={ListaDomicilios[domicilio]}/>);
    }
    return (<center>
      <div>
        <h3>Domicilios</h3>
        <table className= "App-tablas">
          <thead>
            <tr>
              <th>Comprador</th>
              <th>Direccion</th>
              <th>Valor</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {domicilios}
          </tbody>
        </table>
      </div>
    </center>);
  }
}
