import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Styles 

import Styles from 'assets/styles/style.css'
import Normalize from 'assets/styles/normalize.css'

// Layouts
import App from 'layouts/app';
// UI
import Home from 'ui/home'

ReactDOM.render((
<MuiThemeProvider>
  <Router history={hashHistory}>
    <Route component={App}>
    <Route component={Home} path="/"/>
      
    </Route>
  </Router>
 </MuiThemeProvider>
), document.getElementById('app'));