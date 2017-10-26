import React from 'react';
import ReactDOM from 'react-dom';

render(){
  return(
    <div>
    <center>
    <p>input type="text" placeholder="Nombre del producto" onChange={this.agregarProducto} onFocus={this.value=""}<p/>
    <p>input type="text" placeholder="Cantidad" onChange={this.Cantidad} onFocus={this.value=""}<p/>
    <p>input type="text" placeholder="Sku" onChange={this.} onFocus={this.value=""}<p/>
    <input type="button" value="Guardar " onClick={this.guardarProducto}/>
    </center>
    </div>
        )
  }
