import React from 'react';

import './Navbar.css';

export class Navbar extends React.Component {
  /*constructor() {
    super();

    this.state = { contador: 0 };
  }*/

  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Início</a>
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
            <a href="/">Sobre Mim</a>
          </li>
        </ul>
      </nav>
    );
  }
}
