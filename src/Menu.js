import React from 'react';
import Inventario from './Inventario.js';
import Login from './Login.js';
import RealizarCompra from './RealizarCompra.js';
import AgregarInventario from './VendedorAgregarInventario.js';
import GenerarCodigo from './GenerarCodigo.js';
import AgregarProducto from './AgregarProducto.js';

const Menu = () => (
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
            <span className="sr-only">Toogle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/"><img src={logo} alt="logo" className="App-logo-header"/></Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
          <ul className="nav navbar-nav">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Inventario">Inventario</Link></li>
            <li><Link to="/AgregarProducto">Agregar Producto</Link></li>
            <li><Link to="/AgregarInventario">Agregar Inventario</Link></li
            <li><Link to="/GenerarCodigo">Generar Codigo
            <li><Link to="/RealizarCompra">Realizar Compra</Link></li>
            <li><Link to="/MostrarInventario">Ver Inventario</Link></li>
          </ul>
        </div>
      </div>
      </nav>
      <Route exact path="/" component={App}/>
      <Route path="/Inventario" component={Inventario}/>
      <Route path="/AgregarProducto" component={AgregarProducto}/>
      <Route path="/AgregarInventario" component={AgregarInventario}/>
      <Route path="/GenerarCodigo" component={GenerarCodigo}/>
      <Route path="/RealizarCompra" component={RealizarCompra}/>
      <Route path="/MostrarInventario" component={MostrarInventario}/>
    </div>
  </Router>
)

export default Menu
