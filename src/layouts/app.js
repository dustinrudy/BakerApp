import React from 'react';
import { Link , hashHistory} from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="header_home">
        <h3 className="quote">The kitchen is yours, chefs!</h3>
          Batch Maker
          <ul className="header_ul">
            <li className="icons_header"></li>
            <li className="icons_header"></li>
            <li className="icons_header"></li>
          </ul>
        </div>
        <div className="sidebar_nav">
          <ul className="sidebar_nav_list">
            <li>My Recipes</li>
            <li>Public Recipes</li>
            <li>Popular Recipes</li>
            <li>My Favorite Recipes</li>
            <li>My Pantry</li>
          </ul>
        </div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});