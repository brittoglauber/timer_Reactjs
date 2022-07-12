import './style.scss';

import { Component } from 'react';

type myProps = {
  texto: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export default class Botao extends Component<myProps> {
  render() {
    const {type = "submit", onClick} = this.props
    return (
      <button onClick={onClick} type={type} className='botao'>
        {this.props.texto}
      </button>
    )
  }
}
