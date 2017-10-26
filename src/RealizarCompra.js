import React from 'react';
import ReactDOM from 'react-dom';

render(){
  return(
    <div>
    <center>
    <p>input type="text" placeholder="Realizar Compra" onChange={this.realizarCompra} onFocus={this.value=""}<p/>
    <p>input type="text" placeholder="Revisar Inventario" onChange={this.revisarInventario} onFocus={this.value=""}<p/>
    <input type="button" value="Comprar " onClick={this.comprarProducto}/>
    </center>
    </div>
        )
  }
