import React, {Component} from 'react';
import MostrarCuentas from './MostrarCuentas.js';
import ListaCuentas from './ListaCuentas.js';
import app from './App.js';

export default class Cuentas extends Component {

  render() {
    let cuentas = [];
    for (let cuenta in ListaCuentas) {
      if (ListaCuentas[cuenta].usuario == this.props.getUsername()) {
        cuentas.push(<MostrarCuentas cuenta={ListaCuentas[cuenta]}/>);
      }
    }
    return (<center>
      <div>
        <h3>Cuentas</h3>
        <table className= "App-tablas">
          <thead>
            <tr>
              <th>Cuenta</th>
            </tr>
          </thead>
          <tbody>
            {cuentas}
          </tbody>
        </table>
      </div>
    </center>);
  }
}
