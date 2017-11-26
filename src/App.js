import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Inventario from './Inventario.js';
import Codigos from './Codigos.js';
import Login from './Login.js';
import RealizarCompra from './RealizarCompra.js';
import GenerarCodigo from './GenerarCodigo.js';
import AgregarProducto from './AgregarProducto.js';
import Compras from './Compras.js';
import Cuentas from './Cuentas.js';
import Domicilios from './Domicilios.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showComponent: "",
      username: "",
      userType: "",
      listaCompra: [],
      valorCompra: 0
    }
    this.updateShowComponent = this.updateShowComponent.bind(this);
    this.logout = this.logout.bind(this);
    this.successLogin = this.successLogin.bind(this);
    this.updatePurchase = this.updatePurchase.bind(this);
    this.getPurchase = this.getPurchase.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.getUserType = this.getUserType.bind(this);
  }

  logout(){
    this.setState({username: ""});
    this.setState({userType: ""});
    this.setState({showComponent: ""});
  }

  updateShowComponent(arg) {
    this.setState({showComponent: arg.target.value});
  }

  successLogin(username, userType){
    this.setState({username: username});
    this.setState({userType: userType});
    this.setState({showComponent: "Ver Inventario"});
  }

  updatePurchase(listaCompra, valorCompra){
    this.setState({listaCompra: listaCompra});
    this.setState({valorCompra: valorCompra});
  }

  getPurchase(){
    return {
      listaCompra: this.state.listaCompra,
      valorCompra: this.state.valorCompra
    };
  }

  getUsername(){
    return this.state.username;
  }

  getUserType(){
    return this.state.userType;
  }

  render() {
    let show = null;
    let buttons = null;
    const login = <Login name="{Login}" successLogin={this.successLogin}/>;
    const inventario = <Inventario name="{Inventario}"/>;
    const generarCodigo = <GenerarCodigo name="{GenerarCodigo}"/>;
    const verCodigo = <Codigos name="{Codigos}"/>;
    const domicilios = <Domicilios name="{Domicilios}"/>;
    const agregarProducto = <AgregarProducto name="{AgregarProducto}"/>;
<<<<<<< HEAD
    const compras = <Compras name="{Compras}" getUsername={this.state.username} getUserType={this.state.userType}/>;
    const cuentas = <Cuentas name="{Cuentas}"/>;
=======
    const compras = <Compras name="{Compras}"/>;
    const cuentas = <Cuentas name="{Cuentas}" getUsername={this.getUsername}/>;
>>>>>>> 47698ac0a3fa13a4506adfcb9508c8208e47c40b
    const realizarCompra = <RealizarCompra name="{RealizarCompra}" getUsername={this.getUsername} updatePurchase={this.updatePurchase} getPurchase={this.getPurchase}/>;
    if(this.state.userType == ""){
      buttons = <input type="button" value="Ingresar" onClick={this.updateShowComponent}/>;
    } else if(this.state.userType == "seller"){
      buttons = [
        <input type="button" value="Ver Inventario" onClick={this.updateShowComponent}/>,
        <input type="button" value="Agregar Producto" onClick={this.updateShowComponent}/>,
        <input type="button" value="Generar Código" onClick={this.updateShowComponent}/>,
        <input type="button" value="Ver Código" onClick={this.updateShowComponent}/>,
        <input type="button" value="Ver Domicilios" onClick={this.updateShowComponent}/>,
        <input type="button" value="Ver Compras" onClick={this.updateShowComponent}/>,
        <input type="button" value="Cerrar Sesión" onClick={this.logout}/>
      ]
    } else if(this.state.userType == "buyer"){
      buttons = [
        <input type="button" value="Ver Inventario" onClick={this.updateShowComponent}/>,
        <input type="button" value="Realizar Compra" onClick={this.updateShowComponent}/>,
        <input type="button" value="Ver Cuentas" onClick={this.updateShowComponent}/>,
<<<<<<< HEAD
        <input type="button" value="Ver Compras" onClick={this.updateShowComponent}/>,
=======
        <input type="button" value="Ver Domicilios" onClick={this.updateShowComponent}/>,
>>>>>>> 47698ac0a3fa13a4506adfcb9508c8208e47c40b
        <input type="button" value="Cerrar Sesión" onClick={this.logout}/>
      ]
    }
    switch (this.state.showComponent) {
      case "":
        break;
      case "Ingresar":
        show = login;
        break;
      case "Ver Inventario":
        show = inventario;
        break;
      case "Agregar Producto":
        show = agregarProducto;
        break;
      case "Realizar Compra":
        show = realizarCompra;
        break;
      case "Generar Código":
        show = generarCodigo;
        break;
      case "Ver Domicilios":
          show = domicilios;
          break;
      case "Ver Compras":
        show = compras;
        break;
      case "Ver Cuentas":
          show = cuentas;
          break;
      case "Ver Código":
        show = verCodigo;
        break;
    }
    return (<div className="App">
      <div className="App-header"></div>
      <p className="App-intro">
        <p>
          {buttons}
        </p>

      </p>

      <div>
        {show}
      </div>
    </div>);
  }
}

export default App;
