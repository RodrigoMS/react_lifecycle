import React from 'react';
import { Navbar } from '../Navbar/Navbar';

import './Header.css';
import logo from '../../assets/images/logo.svg';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container-logo">
          <img className="logo" src={logo} alt="Logo do React" />
          <h1>Ciclo de Vida do React</h1>
        </div>

        <Navbar></Navbar>
      </header>
    );
  }
}
