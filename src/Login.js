import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
    render(){
      return(
        <div>
          <center>
            <p><input type="text" placeholder="Usuario" onChange={this.login} onFocus={this.value=""}/></p>
            <p><input type="text" placeholder="Contraseña" onChange={this.login} onFocus={this.value=""}/></p>
            <p><input type="button" value="Ingresar " onClick={this.login}/></p>
          </center>
        </div>
        
      )
  }
}
