import React, {Component} from 'react';
import ListaInventario from './ListaInventario.js';
import ListaCompras from './ListaCompras.js';
import MostrarListaCompra from './MostrarListaCompra.js';
import MostrarCuentas from './MostrarCuentas.js';
import ListaCuentas from './ListaCuentas.js';
import ListaTransacciones from './ListaTransacciones.js';

export default class RealizarCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: "none",
      cuentas: [],
      listaCompra: this.props.getPurchase().listaCompra,
      valorCompra: this.props.getPurchase().valorCompra,
      nombre: "",
      sku: "",
      cantidad: "",
      cantidadCompra: "",
      mensaje: "",
      discountCode: "",
      showProduct: false,
      productListToShow: [],
      productListMessage: "Mostrar Lista"
    }
    this.tomarSkuONombre = this.tomarSkuONombre.bind(this);
    this.tomarCantidad = this.tomarCantidad.bind(this);
    this.buscarSku = this.buscarSku.bind(this);
    this.buscarNombre = this.buscarNombre.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.buyDelivery = this.buyDelivery.bind(this);
    this.buyCollect = this.buyCollect.bind(this);
    this.noBuy = this.noBuy.bind(this);
    this.cleanProductList = this.cleanProductList.bind(this);
    this.showProductList = this.showProductList.bind(this);
  }

  tomarCantidad(e) {
    this.setState({cantidadCompra: e.target.value});
  }

  tomarSkuONombre(e) {
    if (e.target.value === "") {
      this.setState({showProduct: false});
      return;
    }
    if (isNaN(e.target.value)) {
      this.buscarNombre(e.target.value);
      return;
    } else {
      this.buscarSku(e.target.value);
      return;
    }
  }

  buscarSku(Search) {
    for (let producto in ListaInventario) {
      if (ListaInventario[producto].sku.includes(Search)) {
        this.setState({nombre: ListaInventario[producto].nombre});
        this.setState({precio: ListaInventario[producto].precio});
        this.setState({cantidad: ListaInventario[producto].cantidad});
        this.setState({sku: ListaInventario[producto].sku});
        this.setState({showProduct: true});
        return;
      }
      else{
        this.setState({nombre: ""});
        this.setState({precio: ""});
        this.setState({cantidad: ""});
        this.setState({sku: ""});
        this.setState({showProduct: false});
      }
    }
  }

  buscarNombre(Search) {
    for (let producto in ListaInventario) {
      if (ListaInventario[producto].nombre.toUpperCase().includes(Search.toUpperCase())) {
        this.setState({nombre: ListaInventario[producto].nombre});
        this.setState({precio: ListaInventario[producto].precio});
        this.setState({cantidad: ListaInventario[producto].cantidad});
        this.setState({sku: ListaInventario[producto].sku});
        this.setState({showProduct: true});
        return;
      }
      else{
        this.setState({nombre: ""});
        this.setState({precio: ""});
        this.setState({cantidad: ""});
        this.setState({sku: ""});
        this.setState({showProduct: false});
      }
    }
  }

  addProduct() {
    for (let producto in ListaInventario) {
      if (ListaInventario[producto].sku === this.state.sku) {
        if (ListaInventario[producto].cantidad >= this.state.cantidadCompra) {
          this.setState({mensaje: "Se añadió el producto exitosamente."});
          this.state.listaCompra.push({nombre: ListaInventario[producto].nombre, sku: ListaInventario[producto].sku, cantidad: this.state.cantidadCompra});
          this.setState({valorCompra: this.state.valorCompra + (ListaInventario[producto].precio * this.state.cantidadCompra)})
          ListaInventario[producto].cantidad -= this.state.cantidadCompra;
          this.setState({cantidad: ListaInventario[producto].cantidad});
        }
        else{
          this.setState({mensaje: "No fue posible añadir el producto. Se excedió la cantidad en reserva de dicho producto."});
        }
      }
    }
    this.props.updatePurchase(this.state.listaCompra, this.state.valorCompra);
  }

  buyCollect() {
    const date = new Date();

    if(this.state.listaCompra.length < 1){
      return;
    }

    if(this.state.listaCompra.length < 1){
      return;
    }

    const compra = {
      buyer: "",
      date: "",
      productList: [],
      numCompra: 0,
      totalPrice: 0,
      discountCode: "",
      deliveryType: "Personal",
      deliveryCost: 0,
      deliverySent: false,
      deliveryAccepted: false,
      deliveryRejectedReason: "",
    }

    const transaccion = {
      cuenta: "",
      valorCompra: 0,
      numCompra: 0,
    }

    compra.buyer = this.props.getUsername();
    compra.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    compra.numCompra = ListaCompras.length;
    compra.productList = this.state.listaCompra;
    compra.discountCode = this.state.discountCode;

    transaccion.cuenta = this.state.cuenta;
    transaccion.numCompra = ListaCompras.length;

    if(compra.discountCode === ""){
      compra.totalPrice = this.state.valorCompra;
      transaccion.valorCompra = this.state.valorCompra;

      for (let cuenta in ListaCuentas) {
        if (ListaCuentas[cuenta].cuenta === this.state.cuenta && ListaCuentas[cuenta].saldo < compra.totalPrice) {
          this.setState({mensaje: "Saldo insuficiente escoja otra cuentas"});
          return;
        }
      }
    }
    else{
      compra.totalPrice = this.state.valorCompra * 0.9;
      transaccion.valorCompra = this.state.valorCompra * 0.9;

      for (let cuenta in ListaCuentas) {
        if (ListaCuentas[cuenta].cuenta === this.state.cuenta && ListaCuentas[cuenta].saldo < compra.totalPrice) {
          this.setState({mensaje: "Saldo insuficiente escoja otra cuentas"});
          return;
        }
      }
    }

    this.cleanProductList();
    ListaCompras.push(compra);
    ListaTransacciones.push(transaccion);
  }

  callThis = (e) => {
    this.setState({cuenta: e.target.value});
  }

  buyDelivery() {
    const date = new Date();

    if (this.state.listaCompra.length < 1){
      return;
    }

    const compra = {
      buyer: "",
      date: "",
      numCompra: "",
      productList: [],
      totalPrice: 0,
      discountCode: "",
      deliveryType: "Domicilio",
      deliveryCost: 5000,
      deliverySent: false,
      deliveryAccepted: false,
      deliveryRejectedReason: "",
    }

    const transaccion = {
      cuenta: "",
      valorCompra: 0,
      numCompra: 0,
    }

    compra.buyer = this.props.getUsername();
    compra.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    compra.numCompra = ListaCompras.length;
    compra.productList = this.state.listaCompra;
    compra.discountCode = this.state.discountCode;

    transaccion.cuenta = this.state.cuenta;
    transaccion.numCompra = ListaCompras.length;

    if (compra.discountCode === "") {
      compra.totalPrice = this.state.valorCompra;
    }
    else {
      compra.totalPrice = this.state.valorCompra * 0.9;
    }

    if (compra.totalPrice * 0.05 < 5000) {
      compra.deliveryCost = 5000;
      transaccion.valorCompra = compra.totalPrice + 5000;

      for (let cuenta in ListaCuentas) {
        if (ListaCuentas[cuenta].cuenta === this.state.cuenta && ListaCuentas[cuenta].saldo < (this.state.valorCompra + 5000)) {
          this.setState({mensaje: "Saldo insuficiente escoja otra cuentas"});
          return;
        }
      }
    }
    else {
      compra.deliveryCost = compra.totalPrice * 0.05;
      transaccion.valorCompra = compra.totalPrice + (compra.totalPrice * 0.05);

      for (let cuenta in ListaCuentas) {
        if (ListaCuentas[cuenta].cuenta === this.state.cuenta && ListaCuentas[cuenta].saldo < (compra.totalPrice + (compra.totalPrice * 0.05))) {
          this.setState({mensaje: "Saldo insuficiente escoja otra cuentas"});
          return;
        }
      }
    }

    this.cleanProductList();
    ListaCompras.push(compra);
    ListaTransacciones.push(transaccion);
  }

  noBuy() {
    for (let producto in this.state.listaCompra) {
      for (let productoInventario in ListaInventario) {
        if (this.state.listaCompra[producto].sku === ListaInventario[productoInventario].sku) {
          ListaInventario[productoInventario].cantidad += parseInt(this.state.listaCompra[producto].cantidad);
        }
      }
    }
    this.cleanProductList();
  }

  showProductList() {
    this.setState({showProduct: !this.state.showProduct});
    if (this.state.productListMessage === "Mostrar Lista") {
      for (let producto in this.state.listaCompra) {
        this.state.productListToShow.push(<MostrarListaCompra producto={this.state.listaCompra[producto]}/>)
        this.setState({productListMessage: "Esconder Lista"});
      }
    }
    else {
      this.setState({productListToShow: []});
      this.setState({productListMessage: "Mostrar Lista"});
    }
  }

  cleanProductList() {
    this.setState({listaCompra: []});
    this.setState({valorCompra: 0});
    this.setState({mensaje: "Se limpio la lista correctamente"});
    this.setState({discountCode: ""});
    this.setState({showProduct: false});
    this.props.updatePurchase([], 0);
  }

  render() {
    for (let cuenta in ListaCuentas) {
      if (ListaCuentas[cuenta].usuario === this.props.getUsername()) {
        this.state.cuentas.push(<MostrarCuentas cuenta={ListaCuentas[cuenta]}/>);
      }
    }

    let contentToShow = null;
    let productListButtons = null;
    let listaCompra = null;

    if (this.state.listaCompra.length > 0 && this.state.cuenta !== "none") {
      productListButtons = <p>
        <input type="button" value="Añadir a la Compra" onClick={this.addProduct}/>
        <input type="button" value="Comprar Productos (Recogida personal)" onClick={this.buyCollect}/>
        <input type="button" value="Comprar Productos (Envío a domicilio)" onClick={this.buyDelivery}/>
        <input type="button" value={this.state.productListMessage} onClick={this.showProductList}/>
        <input type="button" value="Vaciar lista de Productos" onClick={this.noBuy}/>
      </p>;
    }
    else if (this.state.cuenta !== "none"){
      productListButtons = <p>
        <input type="button" value="Añadir a la Compra" onClick={this.addProduct}/>
      </p>;
    }

    if (this.state.showProduct) {
      contentToShow = [
        <p>Sku:&nbsp;{this.state.sku}</p>,
        <p>Nombre:&nbsp;{this.state.nombre}</p>,
        <p>Precio:&nbsp;{this.state.precio}</p>,
        <p>Cantidad:&nbsp;{this.state.cantidad}</p>,
        <input type="text" placeholder="Cantidad a Comprar" onChange={this.tomarCantidad} onFocus={this.value = ""}/>,
        productListButtons
      ]
    }

    if (this.state.productListToShow.length > 0) {
      listaCompra = [
        <center>
          <div>
            <h3>Compras</h3>
            <table className="App-tablas">
              <thead>
                <tr>
                  <th>Sku</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {this.state.productListToShow}
              </tbody>
            </table>
          </div>
          <input type="button" value={this.state.productListMessage} onClick={this.showProductList}/>
        </center>
      ];
    }
    else {
      listaCompra = null;
    }

    return (
      <div>
        <center>
          <h4>Bienvenido: {this.props.getUsername()}</h4>
          <h2>Realizar Compra</h2>
          <p>Puedes encontrar un producto por medio de una búsqueda. Escribe el Nombre del producto o el Sku para poder realizar la búsqueda.</p>
          <h3>Seleccione cuenta con la que realizara la compra</h3>
          <table className= "App-tablas">
            <tbody align = "center">
              <select onChange={this.callThis}>
                <option value="none">Seleccione una Cuenta...</option>
                {this.state.cuentas}
              </select>
            </tbody>
          </table>
          <p>
            <input type="text" placeholder="Nombre o Sku del Producto" onChange={this.tomarSkuONombre} onFocus={this.value = ""}/>
            {contentToShow}
          </p>
          {listaCompra}
          <p>{this.state.mensaje}</p>
        </center>
     </div>
   );
  }
}
