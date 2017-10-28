import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListaInventario from './ListaInventario.js';
import Inventario from './Inventario.js';

export default class agregarProducto extends Component {
  constructor(props) {
    super(props);
    this.state={
      nombre: " ",
      precio: " ",
      sku: " ",
      cantidad: " ",
      existe: "Ingrese un nuevo producto",
      auxiliar: false,
      holi: " ",
      agregado: false,
    }
    this.tomarNombre = this.tomarNombre.bind(this);
    this.tomarCantidad = this.tomarCantidad.bind(this);
    this.tomarSku = this.tomarSku.bind(this);
    this.tomarPrecio = this.tomarPrecio.bind(this);
    this.guardarProducto = this.guardarProducto.bind(this);
  }
  tomarNombre(e) {
    this.setState({nombre: e.target.value})
    console.log(this.state.nombre);
  }
  tomarCantidad(e) {
    this.setState({cantidad: e.target.value})
    console.log(this.state.cantidad);
  }
  tomarSku(e) {
    this.setState({sku: e.target.value})
    console.log(this.state.sku);
  }
  tomarPrecio(e) {
    this.setState({precio: e.target.value})
    console.log(this.state.precio);
  }

  guardarProducto() {
    this.setState({sku: " "});
    let boton = [];
    let termino = null;
    let auxiliar = null;
    ListaInventario.forEach((listaInventario) => {
      if(listaInventario.sku == this.state.sku) {
        this.setState({existe: "El producto ya existe", auxiliar: true});
      }
    });
    ListaInventario.forEach((listaInventario) => {
      if(listaInventario.sku == auxiliar && !this.state.agregado && this.state.auxiliar) {
        this.setState({})
      }
    });
  }
  render(){
    return(
      <div>
      <center>
      <p>Agregar nuevo producto </p>
      <p><input type="text" placeholder="Nombre del producto" onChange={this.tomarNombre} onFocus={this.value=""}/></p>
      <p><input type="text" placeholder="Cantidad" onChange={this.tomarCantidad} onFocus={this.value=""}/></p>
      <p><input type="text" placeholder="Precio" onChange={this.tomarPrecio} onFocus={this.value=""}/></p>
      <p><input type="text" placeholder="Referencia" onChange={this.tomarSku} onFocus={this.value=""}/></p>
      <p><input type="button" value="Guardar " onClick={this.guardarProducto}/></p>
      <p>{this.state.existe}</p>
      <p>{this.state.holi}</p>
      </center>
      </div>
    )
  }
}
