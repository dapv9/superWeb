import React from 'react';
import ReactDOM from 'react-dom';

render(){
  return(
    <div>
    <center>
    <p>input type="text" placeholder="Sku" onChange={this.vendedorAgregarInventario} onFocus={this.value=""}<p/>
    <p>input type="text" placeholder="Agregar al inventario" onChange={this.agregarInventario} onFocus={this.value=""}<p/>
    <input type="button" value="Guardar " onClick={this.guardarProducto}/>
    </center>
    </div>
        )
  }
