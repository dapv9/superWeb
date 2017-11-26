import React, {Component} from 'react';
import MostrarDomicilios from './MostrarDomicilios.js';
import MostrarDomiciliosUsuario from './MostrarDomiciliosUsuario.js';
import ListaCompras from './ListaCompras.js';

export default class Domicilios extends Component {

  render() {
    let userTypeContent = null;
    let domicilios = [];
    if (this.props.getUserType() == "seller") {
      userTypeContent = <th>Comprador</th>;
      for (let domicilio in ListaCompras) {
        domicilios.push(<MostrarDomicilios domicilio={ListaCompras[domicilio]}/>);
      }
    } else if (this.props.getUserType() == "buyer") {
      for (let domicilio in ListaCompras) {
        if (this.props.getUsername() == ListaCompras[domicilio].buyer) {
          domicilios.push(<MostrarDomiciliosUsuario domicilio={ListaCompras[domicilio]}/>);
        }
      }
    }
    return (<center>
      <div>
        <h4>Bienvenido: {this.props.getUsername()}</h4>
        <h3>Domicilios</h3>
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
              <th>Aceptado</th>
              <th>Razón de Rechazo</th>
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
