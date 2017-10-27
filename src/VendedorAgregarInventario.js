import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListaInventario from './ListaInventario.js';
import Inventario from './Inventario.js';
export default class agregarProducto extends Component {
  constructor(props) {
    super(props);
    this.state={
      nombre: "",
      precio: "",
      sku: "",
      cantidad: null,
      existe: "",
    }
    this.tomarSku = this.tomarSku.bind(this);
    this.buscarCodigo = this.buscarCodigo.bind(this);
  }
  tomarSku(e) {
    this.setState({sku: e.target.value})
    console.log(this.state.sku);
  }
  buscarCodigo(){
  		this.setState({sku: " "});
  		console.log(this.state.sku)
  		let boton = [];
  		let termino = null;
  		ListaInventario.forEach((producto) =>{
  				if(producto.sku !== termino && producto.sku ==this.state.sku) {

  					this.setState({precio: producto.precio , nombre: producto.nombre, cantidad: producto.cantidad });

  					ListaInventario.forEach((inventario)=>{
  						if(inventario.sku== producto.sku){
  							this.setState({nombre: inventario.nombre ,
  							               cantidad: inventario.cantidad,
  							               sku: inventario.sku,
  							               precio: inventario.precio,
  							           });
  						}
  					});

  					termino = producto.sku;
  				}
        });
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
