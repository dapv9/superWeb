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
      cantidad: "",
      mensaje: "",
      auxiliar: false,
      agregado: false,
      skuAvailable: false,
    }
    this.tomarNombre = this.tomarNombre.bind(this);
    this.tomarCantidad = this.tomarCantidad.bind(this);
    this.tomarSku = this.tomarSku.bind(this);
    this.tomarPrecio = this.tomarPrecio.bind(this);
    this.guardarProducto = this.guardarProducto.bind(this);
    this.comprobarSku = this.comprobarSku.bind(this);
  }
  tomarNombre(e) {
    this.setState({nombre: e.target.value})
  }
  tomarCantidad(e) {
    this.setState({cantidad: e.target.value})
  }
  tomarSku(e) {
    this.setState({sku: e.target.value})
  }
  tomarPrecio(e) {
    this.setState({precio: e.target.value})
  }

  comprobarSku() {
    for(let producto in ListaInventario){
      if(ListaInventario[producto].sku == this.state.sku) {
        this.setState({mensaje: "El código ya está registrado a un producto."});
        this.skuAvailable = false;
      }
    }
    this.setState({mensaje: "El código está disponible para ser registrado."})
    this.skuAvailable = true;
  }

  guardarProducto() {
    let empty = false;
    if(this.state.nombre != null && this.state.cantidad != null && this.state.sku != null && this.state.precio != null){
      this.setState({mensaje: "No pueden haber campos vacíos"})
      empty = true;
    }
    if(this.skuAvailable && !empty){
        ListaInventario.push({nombre:`${this.state.nombre}`, cantidad: `${this.state.cantidad}`, sku: `${this.state.sku}`, precio: `${this.state.precio}`});
        this.setState({mensaje: "El producto ha sido agregado con éxito."});
    }
  }

  render(){
    let contentToShow = null;
    if(this.skuAvailable){
      contentToShow =
      <p><input type="text" placeholder="Nombre del producto" onChange={this.tomarNombre} onFocus={this.value=""}/></p>
      /*<p><input type="text" placeholder="Cantidad" onChange={this.tomarCantidad} onFocus={this.value=""}/></p>
      <p><input type="text" placeholder="Precio" onChange={this.tomarPrecio} onFocus={this.value=""}/></p>
      <p><input type="button" value="Guardar" onClick={this.guardarProducto}/></p>
*/
    }
    return(
      <div>
      <center>
      <p>Agregar nuevo producto </p>
      <p>
      <input type="text" placeholder="Sku" onChange={this.tomarSku} onFocus={this.value=""}/>
      <input type="button" value="Comprobar Sku" onClick={this.comprobarSku}/>
      </p>
      {contentToShow}
      <p>{this.state.mensaje}</p>
      </center>
      </div>
    )
  }
}
