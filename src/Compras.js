import React, {Component} from 'react';
import MostrarCompras from './MostrarCompras.js';
import MostrarComprasUsuario from './MostrarComprasUsuario.js';
import ListaCompras from './ListaCompras.js';

export default class Compras extends Component {

  render() {
    let userTypeContent = null;
    let compras = [];
    if (this.props.getUserType() === "seller") {
      userTypeContent = <th>Comprador</th>;
      for (let compra in ListaCompras) {
        compras.push(<MostrarCompras compra={ListaCompras[compra]}/>);
      }
    } else if (this.props.getUserType() === "buyer") {
      for (let compra in ListaCompras) {
        if (this.props.getUsername() === ListaCompras[compra].buyer) {
          compras.push(<MostrarComprasUsuario compra={ListaCompras[compra]}/>);
        }
      }
    }
    return (
      <center>
        <div>
          <h4>Bienvenido: {this.props.getUsername()}</h4>
          <h3>Compras</h3>
          <table className="App-tablas">
            <thead>
              <tr>
                {userTypeContent}
                <th>Codigo de Compra</th>
                <th>Fecha</th>
                <th>Valor Total</th>
                <th>Código de Descuento</th>
                <th>Tipo de Entrega</th>
                <th>Valor Entrega</th>
                <th>Entregado</th>
              </tr>
            </thead>
            <tbody>
              {compras}
            </tbody>
          </table>
        </div>
      </center>
    );
  }
}
