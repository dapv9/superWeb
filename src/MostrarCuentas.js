import React, { Component } from 'react';

export default class MostrarCuentas extends Component{
	render(){
		return(
			<option value={this.props.cuenta.cuenta}>{this.props.cuenta.cuenta}</option>
		);
	}
}
