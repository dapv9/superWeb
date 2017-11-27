
import React, { Component } from 'react';

export default class MostrarCompras extends Component{
	render(){
		let showDeliveryInfo = null;
		let deliverySent = "";
		let deliveryAccepted = "";
		let deliveryCost = this.props.compra.totalPrice * 0.05;

		if(deliveryCost >= 5000){
			deliveryCost = this.props.compra.totalPrice * 0.05;
		}
		else{
			deliveryCost = 5000;
		}

		if(this.props.compra.deliverySent === true){
			deliverySent = "Si"
		}
		else{
			deliverySent = "No"
		}

		if(this.props.compra.deliveryAccepted === true){
			deliveryAccepted = "Si"
		}
		else{
			deliveryAccepted = "No"
		}

		showDeliveryInfo = [
			<td>{deliveryCost}</td>,
			<td>{deliverySent}</td>
		];

		return(
			<tr>
					<td>{this.props.compra.buyer.toString()}</td>
					<td>{this.props.compra.numCompra.toString()}</td>
					<td>{this.props.compra.date.toString()}</td>
					<td>{this.props.compra.totalPrice.toString()}</td>
					<td>{this.props.compra.discountCode.toString()}</td>
					<td>{this.props.compra.deliveryType.toString()}</td>
					{showDeliveryInfo}
			</tr>
			);
	}
}
