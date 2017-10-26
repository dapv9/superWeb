import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AgregarProducto from './AgregarProducto.js';
import AgregarInventario from './VendedorAgregarInventario.js';
import Inventario from './Inventario.js';
import GenerarCodigo from './GenerarCodigo.js';
import RealizarCompra from './RealizarCompra.js';
import {ProtoTypes} from 'react';
import Login from './Login';

import ListaInventario from './ListaInventario';

const app = document.getElementById('app');

ReactDOM.render(<Menu/>, app);
