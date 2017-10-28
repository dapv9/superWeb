import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class RealizarCompra extends Component{
	render(){
    return(
      <div>
      <center>
      <p>Comprar producto </p>
      <p><input type="text" placeholder="Buscar Producto" onChange={this.tomarNombre} onFocus={this.value=""}/></p>
      </center>
      </div>
    )
  }
}
