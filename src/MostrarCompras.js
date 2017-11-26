import React, { Component } from 'react';

export default class MostrarCompras extends Component{
	render(){
		return(
			<tr>
<<<<<<< HEAD
					<td>{this.props.compra.buyer.toString()}</td>
					<td>{this.props.compra.date.toString()}</td>
					<td>{this.props.compra.totalPrice.toString()}</td>
					<td>{this.props.compra.discountCode.toString()}</td>
					<td>{this.props.compra.deliveryType.toString()}</td>w
					<td>{this.props.compra.deliveryCost.toString()}</td>
					<td>{this.props.compra.deliverySent.toString()}</td>
					<td>{this.props.compra.deliveryAccepted.toString()}</td>
					<td>{this.props.compra.deliveryRejectedReason.toString()}</td>
=======
				<td>{this.props.compra.buyer}</td>
				<td>{this.props.compra.date}</td>
				<td>{this.props.compra.totalPrice}</td>
				<td>{this.props.compra.discountCode}</td>
>>>>>>> 47698ac0a3fa13a4506adfcb9508c8208e47c40b
			</tr>
			);
	}
}
