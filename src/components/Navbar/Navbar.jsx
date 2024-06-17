import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <a href="/">Aulas</a>
          </li>
          <li>
            <a href="/">Arquivos</a>
          </li>
          <li>
            <a href="/">Links</a>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
