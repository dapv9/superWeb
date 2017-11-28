import React, { Component } from 'react';

export default class MostrarPedidos extends Component{
	render(){
		let showDeliveryInfo = null;
		if(this.props.pedido.deliveryType === "Domicilio" && this.props.pedido.deliverySent === false) {
			let deliveryCost = this.props.pedido.totalPrice * 0.05;;
				if(deliveryCost >= 5000) {
					deliveryCost = this.props.pedido.totalPrice * 0.05;
				} else {
					deliveryCost = 5000;
				}
				showDeliveryInfo = [
					<td>{this.props.pedido.buyer}</td>,
					<td>{this.props.pedido.numCompra}</td>,
					<td>{this.props.pedido.date}</td>,
					<td>{this.props.pedido.totalPrice}</td>,
					<td>{this.props.pedido.discountCode}</td>,
					<td>{deliveryCost}</td>,
				];
		}
		return(
			<tr>
					{showDeliveryInfo}
			</tr>
			);
	}
}
