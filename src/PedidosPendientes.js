import React, {Component} from 'react';
import MostrarPedidos from './MostrarPedidos.js';
import MostrarPedidosUsuario from './MostrarPedidosUsuario.js';
import ListaCompras from './ListaCompras.js';
import ListaInventario from './ListaInventario.js';

export default class PedidosPendientes extends Component {
  constructor(props){
    super(props);
    this.state = {
      codigo : "",
      opcion : "",
      error : "",
      rechazo: null,
      razon: "",
    }
    this.tomarRazon = this.tomarRazon.bind(this);
    this.tomarCodigo = this.tomarCodigo.bind(this);
    this.tomarOpcionA = this.tomarOpcionA.bind(this);
    this.tomarOpcionR = this.tomarOpcionR.bind(this);
    this.addEstado = this.addEstado.bind(this);
  }
  tomarRazon(e) {
    this.setState({razon: e.target.value});
  }
  addEstado() {
    for(let compra in ListaCompras) {
      if(ListaCompras[compra].numCompra == this.state.codigo && ListaCompras[compra].deliveryType =="Domicilio" && ListaCompras[compra].deliverySent == false && ListaCompras[compra].buyer == this.props.getUsername()) {
          if(this.state.opcion == "Aceptar"){
            ListaCompras[compra].deliverySent = true;
            ListaCompras[compra].deliveryAccepted = true;
          } else if (this.state.opcion == "Rechazar") {
            for(let inventario in ListaInventario) {
              if(ListaInventario[inventario].sku == ListaCompras[compra].productList.sku) {
                ListaInventario[inventario].cantidad = ListaCompras[compra].productList.cantidad + ListaInventario[inventario].cantidad;
              }
            }
            ListaCompras[compra].deliverySent = true;
            ListaCompras[compra].deliveryAccepted = false;
            ListaCompras[compra].deliveryRejectedReason = this.state.razon;
          }
          this.state.error = "";
      } else {
        this.state.error = "Cambio realizado con exito";
      }
    }
  }
  tomarCodigo(e) {
    this.setState({codigo: e.target.value});
  }

  tomarOpcionA(e) {
    this.setState({opcion: e.target.value});
  }

  tomarOpcionR(e) {
    this.setState({opcion: e.target.value});
  }

  render() {
    let userTypeContent = null;
    let userContent = null;
    let pedidos = [];
    if (this.props.getUserType() == "seller") {
      userTypeContent = <th>Comprador</th>;
      for (let pedido in ListaCompras) {
        pedidos.push(<MostrarPedidos pedido={ListaCompras[pedido]}/>);
      }
    } else if (this.props.getUserType() == "buyer") {
      for (let pedido in ListaCompras) {
        if (this.props.getUsername() == ListaCompras[pedido].buyer) {
          pedidos.push(<MostrarPedidosUsuario pedido={ListaCompras[pedido]}/>);
        }
      }
      userContent = [
        <p>
          <h4>Si desea Aceptar o Rechazar una compra, llene el siguiente formulario</h4>
          <h5>Codigo: <input type="text" placeholder="Codigo de la compra" onChange={this.tomarCodigo}onFocus={this.value = ""}/></h5>
          <h5>Que desea hacer con el pedido</h5>
          Aceptar <input type="radio" name="group1" value="Aceptar" onChange={this.tomarOpcionA}/>
          Rechazar <input type="radio" name="group1" value="Rechazar" onChange={this.tomarOpcionR}/>
          <h4>Observacion: <input type="text" placeholder="Razon" onChange={this.tomarRazon} onFocus={this.value = ""}/></h4>
        </p>
      ]
    }
    return (<center>
      <div>
        <h4>Bienvenido: {this.props.getUsername()}</h4>
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
        {userContent}

        <input type="button" value="Realizar" onClick={this.addEstado}/>
        <h3>{this.state.error.toString()}</h3>
      </div>
    </center>);
  }
}
