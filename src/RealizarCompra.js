import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListaInventario from './ListaInventario.js';

export default class RealizarCompra extends Component{
  constructor(props) {
    super(props);
    this.state={
      nombreSearch: "",
      skuSearch: "",
      cantidadCompra: "",
      nombre: "",
      precio: "",
      sku: "",
      cantidad: "",
      mensaje: "",
      showProduct: false,
    }
    this.tomarSkuONombre = this.tomarSkuONombre.bind(this);
    this.tomarCantidad = this.tomarCantidad.bind(this);
    this.buscarSku = this.buscarSku.bind(this);
    this.buscarNombre = this.buscarNombre.bind(this);
    this.buy = this.buy.bind(this);
  }

  tomarCantidad(e){
    this.setState({cantidadCompra: e.target.value});
  }

  tomarSkuONombre(e){
    let skuONombre = e.target.value;
    if(isNaN(skuONombre)){
      this.setState({nombreSearch: skuONombre});
      this.setState({skuSearch: ""});
    } else{
      this.setState({skuSearch: skuONombre});
      this.setState({nombreSearch: ""});
    }
    this.setState({showProduct: false});
  }

  buscarSku(){
    for(let producto in ListaInventario){
      if(ListaInventario[producto].sku == this.state.skuSearch){
        this.setState({nombre: ListaInventario[producto].nombre});
        this.setState({precio: ListaInventario[producto].precio});
        this.setState({cantidad: ListaInventario[producto].cantidad});
        this.setState({sku: ListaInventario[producto].sku});
        this.setState({showProduct: true});
      }
    }
  }

  buscarNombre(){
    for(let producto in ListaInventario){
      if(ListaInventario[producto].nombre.toUpperCase().includes(this.state.nombreSearch.toUpperCase())){
        this.setState({nombre: ListaInventario[producto].nombre});
        this.setState({precio: ListaInventario[producto].precio});
        this.setState({cantidad: ListaInventario[producto].cantidad});
        this.setState({sku: ListaInventario[producto].sku});
        this.setState({showProduct: true});
      }
    }
  }

  buy(){
    for(let producto in ListaInventario){
      if(ListaInventario[producto].sku == this.state.sku){
        if(ListaInventario[producto].cantidad > this.state.cantidadCompra){
          ListaInventario[producto].cantidad -= this.state.cantidadCompra;
          this.setState({mensaje: "La compra se realizó exitosamente."});
        } else{
          this.setState({mensaje: "No fue posible realizar la compra. La compra excede la cantidad en reserva del producto."});
        }
      }
    }
  }

	render(){
    let searchButton = null;
    let contentToShow = null;
    if(this.state.showProduct == true){
      contentToShow = [
        <p>Sku:&nbsp;{this.state.sku}</p>,
        <p>Nombre:&nbsp;{this.state.nombre}</p>,
        <p>Precio:&nbsp;{this.state.precio}</p>,
        <p>Cantidad:&nbsp;{this.state.cantidad}</p>,
        <input type="text" placeholder="Cantidad a Comprar" onChange={this.tomarCantidad} onFocus={this.value=""}/>,
        <input type="button" value="Realizar compra" onClick={this.buy}/>
      ]
    }
    if(this.state.nombreSearch != ""){
      searchButton = <input type="button" value="Buscar Nombre" onClick={this.buscarNombre}/>
    } else if(this.state.skuSearch != ""){
      searchButton = <input type="button" value="Buscar Sku" onClick={this.buscarSku}/>
    }
    return(
      <div>
      <center>
      <h2>Comprar producto</h2>
      <p>Puedes encontrar un producto por medio de una búsqueda. Escribe el Nombre del producto o el Sku para poder realizar la búsqueda.</p>
      <p>
        <input type="text" placeholder="Nombre o Sku del Producto" onChange={this.tomarSkuONombre} onFocus={this.value=""}/>
        {searchButton}
        {contentToShow}
      </p>
      <p>{this.state.mensaje}</p>
      </center>
      </div>
    )
  }
}
