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
import AddRecipe from 'ui/addrecipe'
import Recipe from 'ui/recipe'

ReactDOM.render((
<MuiThemeProvider>
  <Router history={hashHistory}>
    <Route component={App}>
    <Route component={Home} path="/"/>
    <Route component={AddRecipe} path="/addrecipe"/>
    <Route component={Recipe} path="/recipe/:id"/>
    </Route>
  </Router>
 </MuiThemeProvider>
), document.getElementById('app'));