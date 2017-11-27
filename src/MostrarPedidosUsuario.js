import React, { Component } from 'react';

export default class MostrarPedidosUsuario extends Component{
	render(){
		let showDeliveryInfo = null;
		if(this.props.pedido.deliveryType === "Domicilio" && this.props.pedido.deliverySent === false) {
			let deliveryCost = this.props.pedido.totalPrice * 0.05;
				if(deliveryCost >= 5000) {
					deliveryCost = this.props.pedido.totalPrice * 0.05;
				} else {
					deliveryCost = 5000;
				}
				showDeliveryInfo = [
					<td>{this.props.pedido.numCompra.toString()}</td>,
					<td>{this.props.pedido.date.toString()}</td>,
					<td>{this.props.pedido.totalPrice.toString()}</td>,
					<td>{this.props.pedido.discountCode.toString()}</td>,
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
