import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import "bootstrap/dist/js/bootstrap.min"
import 'react-loading-skeleton/dist/skeleton.css'
import {BrowserRouter} from "react-router-dom";
import {SkeletonTheme} from "react-loading-skeleton";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <SkeletonTheme  baseColor="grey" highlightColor="#444">
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </SkeletonTheme>
  </React.StrictMode>
);
