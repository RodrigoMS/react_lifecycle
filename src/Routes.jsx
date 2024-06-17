import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Auth } from './components/Auth/Auth';

export class MyRouter extends React.Component {
  constructor(props) {
    super(props);

    // Defina as rotas aqui
    this.router = createBrowserRouter([
      { path: '/', element: <App /> },
      { path: '/auth', element: <Auth /> },
    ]);
  }

  render() {
    // Renderize o roteador
    return this.router;
  }
}
