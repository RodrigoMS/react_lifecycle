import React from 'react';

export class Counter extends React.Component {
  // 1º
  constructor() {
    console.log('Construindo a classe Counter!');

    super();

    this.state = { contador: 0 };
  }

  // 2º
  // UNSAFE_componentWillMount() {} // O componente será montado (Descontinuado)

  // 3º
  render() {
    console.log('Renderizando o componente Counter ...');

    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
      </div>
    );
  }

  // 4º
  componentDidMount() {
    console.log('O componente foi montado.');
  }

  // -- Métodos com base na interação do usuário. --

  // UNSAFE_componentWillUpdate() {} // O componente será atualizado. (Descontinuado)

  componentDidUpdate() {
    console.log('O componente Counter foi atualizado.');
  }

  shouldComponentUpdate() {
    // Sempre quando ocorrer a mudança de "props" propriedades ou estados.
    // Se o retorno for verdadeira "true" ocorre a atualização.
    // Caso o retorno seja falso "false" o componente não atualiza.

    return true;

    // OBS: o estado e o props é modificado, somente o componente é que não é atualizado.
  }

  componentWillUnmount() {
    // - Remover a inscrição de um evento que estava associado ao componente.
    // - Cancelar uma requisição HTTP.
    // - Invalidar algum timer. ex: Contagem regressiva.

    console.log('O componente será desmontado.');
  }
}
