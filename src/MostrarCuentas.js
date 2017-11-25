import React, { Component } from 'react';

export default class MostrarCuentas extends Component{
	render(){
		return(
			<tr>
          <td>{this.props.cuenta.cuenta}</td>
			</tr>
			);
	}
}
