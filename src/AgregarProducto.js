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
      existe: "",
    }
    this.tomarNombre = this.tomarNombre.bind(this);
    this.tomarCantidad = this.tomarCantidad.bind(this);
    this.tomarSku = this.tomarSku.bind(this);
    this.tomarPrecio = this.tomarPrecio.bind(this);
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
      if(listaInventario.sku !== auxiliar && listaInventario.sku == this.state.sku) {
        this.setState({existe: "El producto ya existe"});
      } else {
        Inventario.forEach((inventario) => {
          if(inventario.sku == null) {
            inventario.nombre = this.setState.nombre;
            inventario.cantidad = this.setState.cantidad;
            inventario.sku = this.setState.sku;
            inventario.precio = this.setState.precio;
          }
        });
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
      </center>
      </div>
    )
  }
}
