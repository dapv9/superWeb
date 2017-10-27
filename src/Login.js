import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Login extends Component {
    render(){
      return(
        <div>
        <center>
        <input type="text" placeholder="Usuario" onChange={this.login} onFocus={this.value=""}/>
        <input type="text" placeholder="Contraseña" onChange={this.login} onFocus={this.value=""}/>
        <input type="button" value="Ingresar " onClick={this.login}/>
        </center>
        </div>
      )
  }
}
