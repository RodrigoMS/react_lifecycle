import React from 'react';
import { Navbar } from '../Navbar/Navbar';

import './Header.css';
import logo from '../../assets/img/logo.svg';

export class Header extends React.Component {
  /*constructor() {
    super();

    this.state = { contador: 0 };
  }*/

  render() {
    return (
      <header>
        <img className="logo" src={logo} alt="Logo do React" />
        <Navbar></Navbar>
      </header>
    );
  }
}
