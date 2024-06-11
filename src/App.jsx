import React, { Component } from 'react';
import { Counter } from './components/Counter/Counter';

class App extends Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  render() {
    return (
      <div>
        <h1>Ciclo de Vida do React</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? 'Remover contador' : 'Mostrar contador'}
        </button>

        {/* Se showCounter dor verdadeiro apresente Counter 
            se não não apresente nada. */}
        {this.state.showCounter ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
