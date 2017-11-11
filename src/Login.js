import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListaVendedores from './ListaVendedores.js'
import ListaCompradores from './ListaCompradores.js'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contraseña: "",
    }
    this.tomarUsuario = this.tomarUsuario.bind(this);
    this.tomarContraseña = this.tomarContraseña.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  tomarUsuario(e) {
    this.setState({usuario: e.target.value})
  }

  tomarContraseña(e) {
    this.setState({contraseña: e.target.value})
  }

  checkLogin() {
    for (let vendedor in ListaVendedores) {
<<<<<<< HEAD
      if(this.state.usuario == ListaVendedores[vendedor].usuario && this.state.contraseña == ListaVendedores[vendedor].contraseña) {
        this.props.successLogin(this.state.usuario, "seller");
        return;
      }
    }
    for (let comprador in ListaCompradores) {
      if(this.state.usuario == ListaCompradores[comprador].usuario && this.state.contraseña == ListaCompradores[comprador].contraseña) {
        this.props.successLogin(this.state.usuario, "buyer");
=======
      if (this.state.usuario == ListaVendedores[vendedor].usuario && this.state.contraseña == ListaVendedores[vendedor].contraseña) {
        this.setState({loggedName: this.state.usuario});
        this.setState({tipoUsuario: 'seller'})
        this.setState({logged: true});
        console.log(`Se ha logueado con el nombre de Usuario: ${this.state.usuario}`);
>>>>>>> f094ce3724f515743e1414a4cf29389864681cc4
        return;
      }
    }
  }

  render() {
    return (<div>
      <center>
        <p><input type="text" placeholder="Usuario" onChange={this.tomarUsuario} onFocus={this.value = ""}/></p>
        <p><input type="password" placeholder="Contraseña" onChange={this.tomarContraseña} onFocus={this.value = ""}/></p>
        <p><input type="button" value="Confirmar Ingreso" onClick={this.checkLogin}/></p>
      </center>
    </div>)
  }
}
