import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Helmet} from "react-helmet";

import store from 'Store'
import { Provider } from 'react-redux'

import favicon from 'Assets/favicon.ico'
import logo from 'Assets/logo.png'

import * as serviceWorker from './serviceWorker';
import './index.scss';

const Root = () => (
  <Provider store={store}>
    <Helmet>
      <meta
        name="description"
        content="This is a react-redux boilerplate"
      />
      <link rel="apple-touch-icon" href={logo} />
      <link rel="icon" href={favicon} />
      <title>Josebric React Redux Boilerplate</title>
    </Helmet>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
