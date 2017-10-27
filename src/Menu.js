import React, { Component } from 'react';
import Inventario from './Inventario.js';
import Login from './Login.js';
import RealizarCompra from './RealizarCompra.js';
import AgregarInventario from './VendedorAgregarInventario.js';
import GenerarCodigo from './GenerarCodigo.js';
import AgregarProducto from './AgregarProducto.js';
import App from './App';
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Menu = () => (
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/"><img src={logo} alt="logo" className="App-logo-header"/></Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
          <ul className="nav navbar-nav">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Login"> Ingresar</Link></li>
            <li><Link to="/Inventario"> Ver Inventario</Link></li>
            <li><Link to="/AgregarProducto">Agregar Producto</Link></li>
            <li><Link to="/AgregarInventario">Agregar Inventario</Link></li>
            <li><Link to="/GenerarCodigo">Generar Codigo</Link></li>
            <li><Link to="/RealizarCompra">Realizar Compra</Link></li>
          </ul>
        </div>
      </div>
      </nav>
      <Route exact path="/" component={App}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Inventario" component={Inventario}/>
      <Route path="/AgregarProducto" component={AgregarProducto}/>
      <Route path="/AgregarInventario" component={AgregarInventario}/>
      <Route path="/GenerarCodigo" component={GenerarCodigo}/>
      <Route path="/RealizarCompra" component={RealizarCompra}/>/>
    </div>
  </Router>
)
export default Menu
