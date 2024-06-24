import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import './Style.css';

export class AuthForm extends React.Component {
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
          <h2>Vamos Lá!</h2>

          <form class="actions" action="/">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="" />
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="" />
            <button type="button">Cadastrar</button>
          </form>

          <footer>
            <p>Então bora codar!</p>
            <Link to="/auth">
              <span>←</span> Voltar
            </Link>
          </footer>
        </main>
      </div>
    );
  }
}
