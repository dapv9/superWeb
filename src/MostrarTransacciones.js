import React, { Component } from 'react';

export default class MostrarTransacciones extends Component{
	render(){
		return(
			<tr>
					<td>{this.props.transaccion.numCompra}</td>
					<td>{this.props.transaccion.valorCompra}</td>
			</tr>
			);
	}
}
