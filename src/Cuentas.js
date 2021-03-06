import React, {Component} from 'react';
import MostrarCuentas from './MostrarCuentas.js';
import MostrarTransacciones from './MostrarTransacciones.js';
import ListaCuentas from './ListaCuentas.js';
import ListaTransacciones from './ListaTransacciones.js';

export default class Cuentas extends Component {

  constructor(){
    super();
    this.state = {
      cuenta: '',
      cuentas: []
    }
  }

  callThis = (e) => {
    this.setState({cuenta: e.target.value});
  }

  render() {
    for (let cuenta in ListaCuentas) {
      if (ListaCuentas[cuenta].usuario === this.props.getUsername()) {
        this.state.cuentas.push(<MostrarCuentas cuenta={ListaCuentas[cuenta]}/>);
      }
    }

    let transacciones = [];

    for (let transaccion in ListaTransacciones) {
      if (ListaTransacciones[transaccion].cuenta === this.state.cuenta) {
        transacciones.push(<MostrarTransacciones transaccion={ListaTransacciones[transaccion]}/>);
      }
    }

    return (<center>
      <div>
        <h4>Bienvenido: {this.props.getUsername()}</h4>
        <h3>Cuentas</h3>
        <table className= "App-tablas">
          <tbody align = "center">
            <select onChange={this.callThis}>
              <option value="none">Seleccione una Cuenta...</option>
              {this.state.cuentas}
            </select>
          </tbody>
        </table>
        <h3>Transacciones</h3>
        <table className= "App-tablas">
          <thead>
            <tr>
              <th>Codigo Compra</th>
              <th>Valor Compra</th>
            </tr>
          </thead>
          <tbody>
            {transacciones}
          </tbody>
        </table>
        </div>
      </center>);
  }
}
