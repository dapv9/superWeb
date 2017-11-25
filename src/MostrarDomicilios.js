import React, { Component } from 'react';

export default class MostrarDomicilios extends Component{
	render(){
		return(
			<tr>
					<td>{this.props.domicilio.usuario}</td>
					<td>{this.props.domicilio.direccion}</td>
					<td>{this.props.domicilio.valor}</td>
					<td>{this.props.domicilio.estado}</td>
			</tr>
			);
	}
}
