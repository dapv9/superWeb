import React, { Component } from 'react';

export default class MostrarComprasUsuario extends Component{
	render(){
		let showDeliveryInfo = null;
		let deliverySent = "";
		let deliveryCost = this.props.compra.totalPrice * 0.05;

		if(this.props.compra.deliveryType === "Domicilio" ){
			if(deliveryCost >= 5000) {
				deliveryCost = this.props.compra.totalPrice * 0.05;
			}
			else {
				deliveryCost = 5000;
			}
		}
		else{
			deliveryCost = 0;
		}

		if(this.props.compra.deliverySent === true){
			deliverySent = "Si"
		}
		else{
			deliverySent = "No"
		}

		showDeliveryInfo = [
			<td>{deliveryCost}</td>,
			<td>{deliverySent}</td>
		];

		return(
			<tr>
				<td>{this.props.compra.numCompra}</td>
				<td>{this.props.compra.date}</td>
				<td>{this.props.compra.totalPrice}</td>
				<td>{this.props.compra.discountCode}</td>
				<td>{this.props.compra.deliveryType}</td>
				{showDeliveryInfo}
			</tr>
		);
	}
}
