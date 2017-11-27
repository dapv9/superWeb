import React, { Component } from 'react';

export default class GenerarCodigo extends Component{
	render(){
    return(
      <div>
	      <center>
					<h4>Bienvenido: {this.props.getUsername()}</h4>
		      <p>Generar Código</p>
		      <p>
						<input type="text" placeholder="Comprador Beneficiario" onChange={this.tomarNombre} onFocus={this.value=""}/>
					</p>
		      <p>
						<input type="button" value="Guardar " onClick={this.guardarProducto}/>
					</p>
	      </center>
      </div>
    )
  }
}
