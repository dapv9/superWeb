import React, {Component} from 'react';
import MostrarPedidos from './MostrarPedidos.js';
import MostrarPedidosUsuario from './MostrarPedidosUsuario.js';
import ListaCompras from './ListaCompras.js';

export default class PedidosPendientes extends Component {

  render() {
    let userTypeContent = null;
    let pedidos = [];
    if (this.props.getUserType == "seller") {
      userTypeContent = <th>Comprador</th>;
      for (let pedido in ListaCompras) {
        pedidos.push(<MostrarPedidos pedido={ListaCompras[pedido]}/>);
      }
    } else if (this.props.getUserType == "buyer") {
      for (let pedido in ListaCompras) {
        if (this.props.getUsername == ListaCompras[pedido].buyer) {
          pedidos.push(<MostrarPedidosUsuario pedido={ListaCompras[pedido]}/>);
        }
      }
    }
    return (<center>
      <div>
        <h4>Bienvenido: {this.props.getUsername}</h4>
        <h3>Pedidos Pendientes</h3>
        <table className="App-tablas">
          <thead>
            <tr>
              {userTypeContent}
              <th>Codigo de Compra</th>
              <th>Fecha</th>
              <th>Valor Total</th>
              <th>Código de Descuento</th>
              <th>Valor Entrega</th>
            </tr>
          </thead>
          <tbody>
            {pedidos}
          </tbody>
        </table>
      </div>
    </center>);
  }
}
