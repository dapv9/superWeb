import React, { Component } from 'react';

export default class MostrarComprasUsuario extends Component{
	render(){
		let showDeliveryInfo = null;
		if(this.props.compra.deliveryType == "DeliveryService"){
			showDeliveryInfo = [
				<td>{this.props.compra.deliveryCost.toString()}</td>,
				<td>{this.props.compra.deliverySent.toString()}</td>,
				<td>{this.props.compra.deliveryAccepted.toString()}</td>,
				<td>{this.props.compra.deliveryRejectedReason.toString()}</td>,
			];
		}
		return(
			<tr>
					<td>{this.props.compra.date.toString()}</td>
					<td>{this.props.compra.totalPrice.toString()}</td>
					<td>{this.props.compra.discountCode.toString()}</td>
					<td>{this.props.compra.deliveryType.toString()}</td>
					{showDeliveryInfo}
			</tr>
			);
	}
}
