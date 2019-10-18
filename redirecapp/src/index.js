import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import About from './about.js';
import Rsearch from './realsearch'
import Contact from './contacts';
import Credits from './credits.js'
ReactDOM.render((<Router>
<Route exact path='/' component={App}/>
 <Route exact path='/about' component={About}/>
 <Route path='/real/:kw' component={Rsearch}/>
 <Route exact path='/contact' component={Contact}/>
 <Route exact path='/credits' component={Credits}/>
</Router>), document.getElementById('root'));

serviceWorker.unregister();
