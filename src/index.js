import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './containers/app';

// Global styles
import './styles/index.css';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
