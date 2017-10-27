import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class RealizarCompra extends Component{
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
