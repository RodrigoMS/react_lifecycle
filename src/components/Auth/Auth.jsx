import React from 'react';

import logo from '../../assets/images/logo.svg';

import './Style.css';

export class Auth extends React.Component {
  render() {
    return (
      <div class="content">
        <aside>
          <figure>
            <img src={logo} alt="Logo ReactJS" />
          </figure>

          <h1>
            <span>RMS</span> Project
          </h1>
        </aside>

        <main>
          <h2>
            <span>Estude</span> programação fazendo <span>projetos</span> que ti
            <span> desafiem</span>
          </h2>

          <div class="actions">
            <a href="/">Cadastrar</a>
            <a href="/">Portfólio de projetos</a>
          </div>

          <footer>
            <p>Crie sua conta e vem codar!</p>
            <a href="/">
              <span>←</span> Retornar ao Início
            </a>
          </footer>
        </main>
      </div>
    );
  }
}
