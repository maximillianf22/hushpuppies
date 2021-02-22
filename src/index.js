import React from 'react';
import ReactDOM from 'react-dom';
import Datos from './views/Datos';
import * as serviceWorker from './serviceWorker';


import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/css/bootstrap.min.css';
import './assets/css/master.css';

ReactDOM.render(<Datos />, document.getElementById('root'));

serviceWorker.unregister();
