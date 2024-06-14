import React, { Component } from 'react';

import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { Counter } from './components/Counter/Counter';

import './App.css';
import articles from './assets/data/articles.json';

// Importa todas as imagens da pasta 'src/assets/images'
const images = importAll(
  require.context('./assets/images', false, /\.(png|jpe?g|svg)$/),
);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return item; // Adicione uma declaração de retorno
  });
  return images;
}

class App extends Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  render() {
    return (
      <>
        <Header />

        <section id="articles">
          {articles.map((article, index) => (
            <Article
              title={article.title}
              provider={article.provider}
              description={article.description}
              thumbnail={images[article.thumbnail]}
              delay={index * 500}
            />
          ))}
        </section>

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
