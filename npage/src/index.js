import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Montserrat:500,600,700,900',
      'Open+Sans:400,600,700',
      'Exo:500,600,700,900'
    ]
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
