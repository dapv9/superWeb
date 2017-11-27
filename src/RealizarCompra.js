import React, {Component} from 'react';
import ListaInventario from './ListaInventario.js';
import ListaCompras from './ListaCompras.js';
import MostrarListaCompra from './MostrarListaCompra.js';

export default class RealizarCompra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaCompra: this.props.getPurchase().listaCompra,
      valorCompra: this.props.getPurchase().valorCompra,
      nombreSearch: "",
      skuSearch: "",
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
    let skuONombre = e.target.value;
    if (skuONombre === "") {
      this.setState({showProduct: false});
      return;
    }
    if (isNaN(skuONombre)) {
      this.setState({nombreSearch: skuONombre});
      this.setState({skuSearch: ""});
      this.buscarNombre();
      return;
    } else {
      this.setState({skuSearch: skuONombre});
      this.setState({nombreSearch: ""});
      this.buscarSku();
      return;
    }
  }

  buscarSku() {
    for (let producto in ListaInventario) {
      if (ListaInventario[producto].sku.includes(this.state.skuSearch)) {
        this.setState({nombre: ListaInventario[producto].nombre});
        this.setState({precio: ListaInventario[producto].precio});
        this.setState({cantidad: ListaInventario[producto].cantidad});
        this.setState({sku: ListaInventario[producto].sku});
        this.setState({showProduct: true});
      }
    }
  }

  buscarNombre() {
    for (let producto in ListaInventario) {
      if (ListaInventario[producto].nombre.toUpperCase().includes(this.state.nombreSearch.toUpperCase())) {
        this.setState({nombre: ListaInventario[producto].nombre});
        this.setState({precio: ListaInventario[producto].precio});
        this.setState({cantidad: ListaInventario[producto].cantidad});
        this.setState({sku: ListaInventario[producto].sku});
        this.setState({showProduct: true});
      }
    }
  }

  addProduct() {
    for (let producto in ListaInventario) {
      if (ListaInventario[producto].sku === this.state.sku) {
        if (ListaInventario[producto].cantidad >= this.state.cantidadCompra) {
          this.setState({mensaje: "Se añadió el producto exitosamente."});
          this.state.listaCompra.push({nombre: ListaInventario[producto].nombre, sku: ListaInventario[producto].sku, cantidad: this.state.cantidadCompra});
          this.state.valorCompra += (ListaInventario[producto].precio * this.state.cantidadCompra);
          ListaInventario[producto].cantidad -= this.state.cantidadCompra;
          this.setState({cantidad: ListaInventario[producto].cantidad});
        } else {
          this.setState({mensaje: "No fue posible añadir el producto. Se excedió la cantidad en reserva de dicho producto."});
        }
      }
    }
    this.props.updatePurchase(this.state.listaCompra, this.state.valorCompra);
  }

  buyCollect() {
    const date = new Date();
    if (this.state.listaCompra.length < 1) {
      return;
    }
    const compra = {
      buyer: "",
      date: "",
      productList: [],
      totalPrice: 0,
      discountCode: "",
      deliveryType: "CollectService",
      deliveryCost: 5000,
      deliverySent: false,
      deliveryAccepted: false,
      deliveryRejectedReason: "",
    }
    compra.buyer = this.props.getUsername();
    compra.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    compra.productList = this.state.listaCompra;
    compra.discountCode = this.state.discountCode;
    if (compra.discountCode === "") {
      compra.totalPrice = this.state.valorCompra;
    } else {
      compra.totalPrice = this.state.valorCompra * 0.9;
    }
    this.cleanProductList();
    ListaCompras.push(compra);
  }

  buyDelivery() {
    const date = new Date();
    if (this.state.listaCompra.length < 1) {
      return;
    }
    const compra = {
      buyer: "",
      date: "",
      productList: [],
      totalPrice: 0,
      discountCode: "",
      deliveryType: "DeliveryService",
      deliveryCost: 5000,
      deliverySent: false,
      deliveryAccepted: false,
      deliveryRejectedReason: "",
    }
    compra.buyer = this.props.getUsername();
    compra.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    compra.productList = this.state.listaCompra;
    compra.discountCode = this.state.discountCode;
    if (compra.discountCode === "") {
      compra.totalPrice = this.state.valorCompra;
    } else {
      compra.totalPrice = this.state.valorCompra * 0.9;
    }
    if (compra.totalPrice * 0.05 < 5000) {
      compra.deliveryCost = 5000;
    } else {
      compra.deliveryCost = compra.totalPrice * 0.05;
    }
    this.cleanProductList();
    ListaCompras.push(compra);
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
    } else {
      this.setState({productListToShow: []});
      this.setState({productListMessage: "Mostrar Lista"});
    }
  }

  cleanProductList() {
    this.setState({listaCompra: []});
    this.setState({valorCompra: 0});
    this.setState({mensaje: ""});
    this.setState({discountCode: ""});
    this.setState({showProduct: false});
    this.props.updatePurchase(this.state.listaCompra, this.state.valorCompra);
  }

  render() {
    let contentToShow = null;
    let productListButtons = null;
    let listaCompra = null;
    if (this.state.listaCompra.length > 0) {
      productListButtons = <p>
        <input type="button" value="Añadir a la Compra" onClick={this.addProduct}/>
        <input type="button" value="Comprar Productos (Recogida personal)" onClick={this.buyCollect}/>
        <input type="button" value="Comprar Productos (Envío a domicilio)" onClick={this.buyDelivery}/>
        <input type="button" value={this.state.productListMessage} onClick={this.showProductList}/>
        <input type="button" value="Vaciar lista de Productos" onClick={this.noBuy}/>
      </p>;
    } else {
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
      listaCompra = [<center>
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
    } else {
      listaCompra = null;
    }

    return (<div>
      <center>
        <h4>Bienvenido: {this.props.getUsername()}</h4>
        <h2>Realizar Compra</h2>
        <p>Puedes encontrar un producto por medio de una búsqueda. Escribe el Nombre del producto o el Sku para poder realizar la búsqueda.</p>
        <p>
          <input type="text" placeholder="Nombre o Sku del Producto" onChange={this.tomarSkuONombre} onFocus={this.value = ""}/> {contentToShow}
        </p>
        {listaCompra}
        <p>{this.state.mensaje}</p>
      </center>
    </div>)
  }
}
