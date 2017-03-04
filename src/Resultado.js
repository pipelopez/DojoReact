import React, { Component } from 'react';


class Resultado extends Component {

  resultado = {};

  constructor(props) {
    super(props);
    this.resultado = props.resultado;
  }
  render(){
    return(
        <div class ClassName="item">
          <div class ClassName="titulo">{this.resultado.title}</div>
          <div class ClassName="imagen"><img role="presentation" src={this.resultado.thumbnail}/></div>
          <div class ClassName="precio">{this.resultado.price}</div>
          <div class ClassName="link"><a href={this.resultado.permalink}>Más información</a></div>
        </div>
    );
  }
}

export default Resultado;
