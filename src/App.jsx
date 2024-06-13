import React, { Component } from 'react';

import { Counter } from './components/Counter/Counter';
import { Header } from './components/Header/Header';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  render() {
    return (
      <>
        <Header></Header>

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
      </>
    );
  }
}

export default App;
