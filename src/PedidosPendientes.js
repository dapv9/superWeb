import React, {Component} from 'react';
import ListaInventario from './ListaInventario.js';
import ListaCompras from './ListaCompras.js';;

export default class PedidosPendientes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {

    return (<center>
      <div>
        <h3>Pedidos</h3>
        <table className="App-tablas">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </center>);
  }
