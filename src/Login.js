import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Login extends Component {
    render(){
      return(
        <center>
        <div>
        <input type="text" placeholder="Usuario" onChange={this.login} onFocus={this.value=""}/>
        <br>
        <input type="text" placeholder="Contraseña" onChange={this.login} onFocus={this.value=""}/>
        <br>
        <input type="button" value="Ingresar " onClick={this.login}/>
        </div>
        </center>
      )
  }
}
