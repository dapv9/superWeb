import React, { Component } from 'react';

export default class MostrarDomiciliosUsuario extends Component{
	render(){
		let showDeliveryInfo = null;
		if(this.props.domicilio.deliveryType === "Domicilio") {
			let deliverySent = "";
			let deliveryAccepted = "";
			let deliveryCost = this.props.domicilio.totalPrice * 0.05;
				if(deliveryCost >= 5000) {
					deliveryCost = this.props.domicilio.totalPrice * 0.05;
				} else {
					deliveryCost = 5000;
				}
				if(this.props.domicilio.deliverySent === true)
				{
					deliverySent = "Si"
				} else {
					deliverySent = "No"
				}
				if(this.props.domicilio.deliveryAccepted === true)
				{
					deliveryAccepted = "Si"
				} else {
					deliveryAccepted = "No"
				}
				showDeliveryInfo = [
					<td>{this.props.domicilio.numCompra}</td>,
					<td>{this.props.domicilio.date}</td>,
					<td>{this.props.domicilio.totalPrice}</td>,
					<td>{this.props.domicilio.discountCode}</td>,
					<td>{this.props.domicilio.deliveryType}</td>,
					<td>{deliveryCost}</td>,
					<td>{deliverySent}</td>,
					<td>{deliveryAccepted}</td>,
					<td>{this.props.domicilio.deliveryRejectedReason}</td>,
				];
		}
		return(
			<tr>
					{showDeliveryInfo}
			</tr>
			);
	}
}
