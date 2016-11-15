import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

// Styles 

import Styles from 'assets/styles/style.css'
import Normalize from 'assets/styles/normalize.css'

// Layouts
import App from 'layouts/app';
// UI
import Home from 'ui/home'
import AddRecipe from 'ui/addrecipe'
import Recipe from 'ui/recipe'
import AddInstructions from 'ui/addInstructions'
import AddIngredients from 'ui/addIngredients'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
    <Route component={Home} path="/"/>
    <Route component={AddRecipe} path="/addrecipe"/>
    <Route component={AddIngredients} path="/ingredients/:instructionId"/>
    <Route component={AddInstructions} path ="/instructions/:recipeId"/>
    <Route component={Recipe} path="/recipes/:id"/>
    </Route>
  </Router>
), document.getElementById('app'));