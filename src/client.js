import React from 'react';
import { hydrate } from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import App from './App';

import routes from './routes';




hydrate((
    <Router>
      <App routes={routes} initialData={window.DATA} />
    </Router>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}


