import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import "bootstrap/dist/js/bootstrap.min"
import {BrowserRouter} from "react-router-dom";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>
);
