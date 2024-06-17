import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//import { MyRouter } from './Routes';

import App from './App';
import { Auth } from './components/Auth/Auth';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/auth', element: <Auth /> },
  //{ path: '*', element: <NotFound /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
