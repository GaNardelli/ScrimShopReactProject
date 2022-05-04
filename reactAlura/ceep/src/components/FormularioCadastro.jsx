import React, { Component } from "react";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="titulo" />
        <textarea placeholder="escreva sua nota"></textarea>
        <button>Enviar nota</button>
      </form>
    );
  }
}
